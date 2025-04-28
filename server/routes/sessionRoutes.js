
const express = require('express');
const router = express.Router();
const Session = require('../models/Session');
const User = require('../models/User');
const Skill = require('../models/Skill');
const auth = require('../middleware/auth');

// Get all sessions for current user (as student or instructor)
router.get('/my-sessions', auth, async (req, res) => {
  try {
    const sessions = await Session.find({
      $or: [
        { student: req.user.id },
        { instructor: req.user.id }
      ]
    })
      .populate('skill', 'title image')
      .populate('instructor', 'name profileImage')
      .populate('student', 'name profileImage')
      .sort({ scheduledDate: 1 });
    
    res.json(sessions);
  } catch (error) {
    console.error('Get sessions error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Book a new session
router.post('/', auth, async (req, res) => {
  try {
    const { skillId, scheduledDate, duration } = req.body;
    
    // Find skill
    const skill = await Skill.findById(skillId);
    if (!skill) {
      return res.status(404).json({ message: 'Skill not found' });
    }
    
    // Find user (student)
    const user = await User.findById(req.user.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    
    // Check if student has enough coins
    if (user.coins < skill.price) {
      return res.status(400).json({ message: 'Not enough coins' });
    }
    
    // Create new session
    const newSession = new Session({
      skill: skillId,
      instructor: skill.instructor,
      student: req.user.id,
      scheduledDate,
      duration,
      meetingLink: `https://meet.skillswap.com/${skillId}-${Date.now()}`
    });
    
    // Deduct coins from student
    user.coins -= skill.price;
    await user.save();
    
    // Add coins to instructor
    const instructor = await User.findById(skill.instructor);
    instructor.coins += skill.price;
    await instructor.save();
    
    const session = await newSession.save();
    
    // Return populated session
    const populatedSession = await Session.findById(session._id)
      .populate('skill', 'title image')
      .populate('instructor', 'name profileImage')
      .populate('student', 'name profileImage');
    
    res.status(201).json(populatedSession);
  } catch (error) {
    console.error('Book session error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Update session status
router.put('/:id/status', auth, async (req, res) => {
  try {
    const { status } = req.body;
    
    let session = await Session.findById(req.params.id);
    
    if (!session) {
      return res.status(404).json({ message: 'Session not found' });
    }
    
    // Check if user is instructor or student
    if (session.instructor.toString() !== req.user.id && session.student.toString() !== req.user.id) {
      return res.status(401).json({ message: 'Not authorized' });
    }
    
    // Update status
    session.status = status;
    await session.save();
    
    // Return populated session
    const updatedSession = await Session.findById(req.params.id)
      .populate('skill', 'title image')
      .populate('instructor', 'name profileImage')
      .populate('student', 'name profileImage');
    
    res.json(updatedSession);
  } catch (error) {
    console.error('Update session status error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Update session notes
router.put('/:id/notes', auth, async (req, res) => {
  try {
    const { notes } = req.body;
    
    let session = await Session.findById(req.params.id);
    
    if (!session) {
      return res.status(404).json({ message: 'Session not found' });
    }
    
    // Check if user is instructor or student
    if (session.instructor.toString() !== req.user.id && session.student.toString() !== req.user.id) {
      return res.status(401).json({ message: 'Not authorized' });
    }
    
    // Update notes
    session.notes = notes;
    await session.save();
    
    res.json(session);
  } catch (error) {
    console.error('Update session notes error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
