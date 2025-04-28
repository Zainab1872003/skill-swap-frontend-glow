
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  BookOpen,
  Coins,
  MessageCircle,
  Star,
  Video,
} from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  // For the animated numbers
  const stats = [
    { value: "5,000+", label: "Active Users" },
    { value: "120+", label: "Skills Available" },
    { value: "10,000+", label: "Sessions Completed" },
    { value: "4.8", label: "Average Rating" },
  ];

  // Features for the feature section
  const features = [
    {
      icon: <BookOpen className="h-12 w-12 text-skill-blue" />,
      title: "Teach Your Skills",
      description:
        "Share your expertise and help others learn while earning coins that you can use for your own learning journey.",
    },
    {
      icon: <Coins className="h-12 w-12 text-skill-coral" />,
      title: "Coin-Based Economy",
      description:
        "Our unique coin system enables fair exchanges. Earn coins by teaching and spend them to learn from others.",
    },
    {
      icon: <Video className="h-12 w-12 text-skill-teal" />,
      title: "Live Video Sessions",
      description:
        "Connect face-to-face through our integrated video platform for personalized, interactive learning experiences.",
    },
    {
      icon: <MessageCircle className="h-12 w-12 text-skill-purple" />,
      title: "Direct Messaging",
      description:
        "Easily communicate with teachers or students to coordinate sessions and ask questions.",
    },
  ];

  // Mock testimonials
  const testimonials = [
    {
      quote:
        "SkillSwap helped me turn my hobby into a way to earn while helping others. The coin system makes exchanges fair and motivating.",
      author: "Alex Johnson",
      role: "Web Developer & Teacher",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&auto=format&fit=crop",
    },
    {
      quote:
        "I've learned three new languages and taught graphic design to dozens of students. SkillSwap made skill sharing accessible and rewarding.",
      author: "Sarah Chen",
      role: "Graphic Designer",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop",
    },
    {
      quote:
        "The platform's coin system creates a beautiful cycle of giving and receiving knowledge. It's changed how I think about learning.",
      author: "Michael Brown",
      role: "Music Teacher",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop",
    },
  ];

  // Popular skill categories
  const categories = [
    "Programming & Development",
    "Design & Creative",
    "Marketing",
    "Business & Finance",
    "Languages",
    "Music",
    "Academics",
    "Health & Fitness",
  ];

  return (
    <div className="space-y-24 pt-6 pb-16">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl -z-10" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading leading-tight">
                Exchange{" "}
                <span className="bg-gradient-to-r from-skill-blue to-skill-indigo bg-clip-text text-transparent">
                  Knowledge
                </span>
                , <br /> Grow{" "}
                <span className="bg-gradient-to-r from-skill-teal to-skill-purple bg-clip-text text-transparent">
                  Together
                </span>
              </h1>

              <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0">
                SkillSwap connects skilled teachers with eager students through a
                unique coin-based economy. Teach what you know, learn what you
                don't.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  asChild
                  size="lg"
                  className="skill-gradient text-lg h-14 px-8"
                >
                  <Link to="/auth/register">Get Started</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="text-lg h-14 px-8 group"
                >
                  <Link to="/marketplace" className="flex items-center gap-2">
                    Explore Skills{" "}
                    <ArrowRight className="transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="flex-1 relative">
              <div className="relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-skill-blue to-skill-indigo rounded-3xl blur opacity-30 animate-pulse" />
                <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1024&auto=format&fit=crop"
                    alt="People collaborating"
                    className="w-full h-auto aspect-[4/3] object-cover"
                  />
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/60 to-transparent py-6 px-6">
                    <div className="flex items-center gap-4">
                      <div className="bg-white/90 backdrop-blur-sm p-3 rounded-full">
                        <Video className="h-6 w-6 text-skill-blue" />
                      </div>
                      <div className="text-white">
                        <p className="font-medium">Live Session in Progress</p>
                        <p className="text-sm opacity-80">
                          Web Development with React
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating cards */}
              <div className="absolute -right-4 -top-4 transform rotate-6 animate-float">
                <Card className="w-32 h-32 flex flex-col items-center justify-center bg-white/90 backdrop-blur-sm">
                  <CardContent className="p-4 flex flex-col items-center justify-center">
                    <Coins className="h-8 w-8 text-skill-coral mb-2" />
                    <p className="text-lg font-bold">120</p>
                    <p className="text-xs text-gray-500">Coins Earned</p>
                  </CardContent>
                </Card>
              </div>

              <div className="absolute -left-4 -bottom-4 transform -rotate-6 animate-float">
                <Card className="w-36 h-24 bg-white/90 backdrop-blur-sm">
                  <CardContent className="p-4 flex items-center justify-center">
                    <div className="flex items-center gap-2">
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            className="h-4 w-4 text-amber-500 fill-amber-500"
                          />
                        ))}
                      </div>
                      <span className="font-bold">5.0</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center"
            >
              <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-skill-blue to-skill-indigo bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="mt-2 text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold font-heading">
            How SkillSwap Works
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Our coin-based platform makes skill exchange simple and rewarding
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl p-8 shadow-md border border-gray-100 relative">
            <div className="absolute top-4 left-4 bg-blue-100 text-skill-blue w-8 h-8 rounded-full flex items-center justify-center font-bold">
              1
            </div>
            <div className="text-center pt-6">
              <div className="bg-blue-50 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <BookOpen className="h-10 w-10 text-skill-blue" />
              </div>
              <h3 className="text-xl font-bold mb-2">
                Sign Up and List Skills
              </h3>
              <p className="text-gray-600">
                Create an account, receive 10 free coins, and list the skills
                you're willing to teach.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-md border border-gray-100 relative">
            <div className="absolute top-4 left-4 bg-blue-100 text-skill-blue w-8 h-8 rounded-full flex items-center justify-center font-bold">
              2
            </div>
            <div className="text-center pt-6">
              <div className="bg-blue-50 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="h-10 w-10 text-skill-blue" />
              </div>
              <h3 className="text-xl font-bold mb-2">
                Connect and Book Sessions
              </h3>
              <p className="text-gray-600">
                Browse the marketplace, find skills you want to learn, and
                schedule sessions with teachers.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-md border border-gray-100 relative">
            <div className="absolute top-4 left-4 bg-blue-100 text-skill-blue w-8 h-8 rounded-full flex items-center justify-center font-bold">
              3
            </div>
            <div className="text-center pt-6">
              <div className="bg-blue-50 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <Coins className="h-10 w-10 text-skill-blue" />
              </div>
              <h3 className="text-xl font-bold mb-2">
                Earn and Spend Coins
              </h3>
              <p className="text-gray-600">
                Earn coins by teaching others, and spend them to learn new skills
                from other experts.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Button asChild size="lg">
            <Link to="/auth/register">Join SkillSwap Today</Link>
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold font-heading">
              Features That Make SkillSwap Special
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Our platform is designed with both teachers and students in mind
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all border border-gray-100"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold font-heading">
            Popular Skill Categories
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Discover skills in these popular areas or offer your own expertise
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((category, index) => (
            <Link
              key={index}
              to="/marketplace"
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all border border-gray-100 hover:border-blue-200 text-center"
            >
              <h3 className="font-medium">{category}</h3>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button asChild variant="outline">
            <Link to="/marketplace" className="flex items-center gap-2">
              View All Categories <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold font-heading">
            What Our Users Say
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            SkillSwap has helped thousands exchange knowledge and skills
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className="h-4 w-4 text-amber-500 fill-amber-500"
                    />
                  ))}
                </div>
                <p className="italic text-gray-700 mb-6">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-medium">{testimonial.author}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-24">
        <div className="absolute inset-0 bg-gradient-to-r from-skill-blue to-skill-indigo rounded-3xl -z-10" />

        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl sm:text-4xl font-bold font-heading mb-6">
            Ready to Start Your Knowledge Exchange Journey?
          </h2>
          <p className="text-xl opacity-90 mb-10">
            Join thousands of users who are already teaching, learning, and
            growing together on SkillSwap.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="text-skill-indigo font-medium bg-white hover:bg-gray-100 h-14 px-8 text-lg"
            >
              <Link to="/auth/register">Create Account</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-white border-white hover:bg-white/10 h-14 px-8 text-lg"
            >
              <Link to="/marketplace">Browse Skills</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
