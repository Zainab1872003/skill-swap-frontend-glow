
const express = require('express');
const router = express.Router();
const Skill = require('../models/Skill');
const auth = require('../middleware/auth');

// Get all skills
router.get('/', async (req, res) => {
  try {
    const skills = await Skill.find()
      .populate('instructor', 'name profileImage')
      .sort({ createdAt: -1 });
    
    res.json(skills);
  } catch (error) {
    console.error('Get skills error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get skill by ID
router.get('/:id', async (req, res) => {
  try {
    const skill = await Skill.findById(req.params.id)
      .populate('instructor', 'name profileImage bio')
      .populate('reviews.user', 'name profileImage');
    
    if (!skill) {
      return res.status(404).json({ message: 'Skill not found' });
    }
    
    res.json(skill);
  } catch (error) {
    console.error('Get skill by ID error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Create new skill
router.post('/', auth, async (req, res) => {
  try {
    const { title, description, category, price, duration, image } = req.body;
    
    const newSkill = new Skill({
      title,
      description,
      category,
      instructor: req.user.id,
      price,
      duration,
      image
    });
    
    const skill = await newSkill.save();
    
    res.status(201).json(skill);
  } catch (error) {
    console.error('Create skill error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Update skill
router.put('/:id', auth, async (req, res) => {
  try {
    const { title, description, category, price, duration, image } = req.body;
    
    let skill = await Skill.findById(req.params.id);
    
    if (!skill) {
      return res.status(404).json({ message: 'Skill not found' });
    }
    
    // Check if user is the owner
    if (skill.instructor.toString() !== req.user.id) {
      return res.status(401).json({ message: 'Not authorized' });
    }
    
    const updatedSkill = await Skill.findByIdAndUpdate(
      req.params.id,
      { $set: { title, description, category, price, duration, image } },
      { new: true }
    );
    
    res.json(updatedSkill);
  } catch (error) {
    console.error('Update skill error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Delete skill
router.delete('/:id', auth, async (req, res) => {
  try {
    const skill = await Skill.findById(req.params.id);
    
    if (!skill) {
      return res.status(404).json({ message: 'Skill not found' });
    }
    
    // Check if user is the owner
    if (skill.instructor.toString() !== req.user.id) {
      return res.status(401).json({ message: 'Not authorized' });
    }
    
    await skill.deleteOne();
    
    res.json({ message: 'Skill removed' });
  } catch (error) {
    console.error('Delete skill error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Add review to skill
router.post('/:id/reviews', auth, async (req, res) => {
  try {
    const { text, rating } = req.body;
    
    const skill = await Skill.findById(req.params.id);
    
    if (!skill) {
      return res.status(404).json({ message: 'Skill not found' });
    }
    
    // Add review
    skill.reviews.unshift({
      user: req.user.id,
      text,
      rating
    });
    
    // Update average rating
    const totalRating = skill.reviews.reduce((acc, review) => acc + review.rating, 0);
    skill.rating = totalRating / skill.reviews.length;
    
    await skill.save();
    
    res.json(skill);
  } catch (error) {
    console.error('Add review error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
