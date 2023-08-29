"use client";

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const testimonials = [
  {
    name: "Daniel",
    avatar: "A",
    title: "Software Engineer",
    description: "This is one of the best site i have ever used.",
  },
  {
    name: "Juan",
    avatar: "B",
    title: "Fullstack Developer",
    description: "The music generation tab is very unique.",
  },
  {
    name: "Jessica",
    avatar: "c",
    title: "Product MAnager",
    description: "Very Good 👍",
  },
  {
    name: "Ben",
    avatar: "D",
    title: "Software Engineer",
    description:
      "I like this site a lot. will probably recommend to my coworkers",
  },
  {
    name: "Dave",
    avatar: "E",
    title: "Intern Software Engineer",
    description: "This helped me a lot.",
  },
  {
    name: "Samantha",
    avatar: "F",
    title: "Software Developer",
    description: "I use this website every single day.",
  },
  {
    name: "Kobe",
    avatar: "G",
    title: "Youtube Content Maker",
    description: "This is a nice tool kit to have.",
  },
  {
    name: "Harry",
    avatar: "H",
    title: "Wizard",
    description:
      "This site is brilliant, it got all the spells there is to know.",
  },
];

const LandingContent = () => {
  return (
    <div className="px-10 pb-20">
      <h2 className="text-center text-4xl text-white font-extrabold mb-10">
        Testimonials
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {testimonials.map((testimonial) => (
          <Card
            key={testimonial.description}
            className="bg-[#192339] border-none text-white"
          >
            <CardHeader>
              <CardTitle className="flex items-center gap-x-2">
                <div>
                  <p className="text-lg">{testimonial.name}</p>
                  <p className="text-sm text-zinc-400">{testimonial.title}</p>
                </div>
              </CardTitle>
              <CardContent className="pt-4 px-0">
                {testimonial.description}
              </CardContent>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default LandingContent;
