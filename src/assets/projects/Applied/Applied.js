const Popper = {
    metadata: {
        name: "applied",
        theme: "#005259",
        gradient: "#FBFFFF",
        display: "yes"
    },
    header: {
      name: "Applied 2020",
      catchphrase: "A remote, intensive program to work with industry Designers",
      descriptions: {
        titles: ["ROLE", "TIME", "DATE"],
        contents: ["Co Founder", "4 Months", "Summer 2020"]
      },
      images: [
        require('./Applied Splash.png')
      ]
    },
    sections: [
      {
        name: "Context",
        type: "text",
        content: [
          "March 2020, the World faced a pandemic. Everything shut down. For many of us, the near future was scary and unprecedented. And back in school, I saw many students struggling putting their foot in the design industry.",
          [
            { 
              TextType: "innerText",
              Content: "A close friend of mine, "
            },{ 
              TextType: "link",
              Content: "Jonathan Tran",
              href: "https://www.linkedin.com/in/jonanhtran/"
            },{ 
              TextType: "innerText",
              Content: "  experienced this first hand when his internship offer was rescinded. Although devastated, Jon was interested in figuring out how we could help others in the same situation. We began brainstorming ways we could help others through this uncertainty and that’s how we created the Applied program."
            }
          ]
        ]
      },{
          name: "What Is Applied?", 
          type: "text",
          content: [
            [
              {
                TextType: "innerText",
                Content: "The Applied program was an "
              },{
                TextType: "bold",
                Content: "intensive, free, remote program"
              },{
                TextType: "innerText",
                Content: " for students to refine their product design skills. See "
              },{
                TextType: "link",
                Content: "the program wiki here",
                href: "https://www.notion.so/Applied-2020-f88c3304d85b4fbab7640a87d30befb0"
              },{
                TextType: "innerText",
                Content: "."
              }
            ],
            "Internship experiences help students bridge their education with the design industry; the goal for Applied is to help students get an alternative experience that can bridge the same gap.",
            "In this 8 week program, students worked on internship-inspired projects while having weekly critiques and one-on-ones with industry Designers from places like Facebook, Microsoft, Lyft, Asana, Postmates, Gusto, and more."
          ]
      },{
        name: "What We Did", 
        type: "text",
        content: [
          "As cofounders of the program, Jon and I created the entire program from the ground up. This includes creating the curriculum, the project prompts, the buddy/mentor support structure, the crash courses, social events, portfolio reviews, and everything else.",
          "Before the program started, we also had to broadcast the program through our self-made website and marketing campaigns, recruit all buddies and mentors, and review 275 applications to narrow down 27 students."
        ]
      },{
        name: "The Program",
        type: "text",
        content: [
          { 
            TextType: "subheader",
            Content: "Project Prompts",
          },
          [
            {
              TextType: "innerText",
              Content: "We created 12 prompts that matches with different focuses (visual design, product thinking, etc) to give students the chance to pick their learning goals. See "
            },{
              TextType: "link",
              Content: "the full list here",
              href: "https://www.notion.so/Design-Prompts-444f69cd61ed4ac99e7e12c98e2db621"
            },{
              TextType: "innerText",
              Content: "."
            }
          ],{ 
            TextType: "subheader",
            Content: "Mentorship",
          },
          "We grouped students of 3-4 to a buddy and mentor. Buddies provide hands-on guidance for students, while mentors provide guidance on a less frequent basis."
        ]
      },{
        name: "Our Impact",
        type: "gallery",
        content: [
          require('./Impact1.png'),
          require('./Impact2.png'),
          require('./Impact3.png'),
          require('./Impact4.png'),
          require('./Impact5.png')
        ]
      },{
        name: "To The Ones That Made It Happen",
        type: "text",
        content: [
          { 
            TextType: "subheader",
            Content: "To the 2020 cohort:",
          },
          "While everything else was falling apart, all of you came in with a determination to learn and grow. You showed up to every second of the program and put your whole heart into your work.",
          "If you are ever feeling stuck in life, I hope this serves as a reminder that even during the hardest times, you moved forward, and still gave it your best.",
          { 
            TextType: "subheader",
            Content: "To the buddies & mentors:",
          },
          "When asked to volunteer your time for a no name program, you said yes without any hesitation and knowing that it will be a lot of work. When the world was shutting down, your jumped in to help others in need.",
          "This program would not have succeeded with you, and I'm forever grateful for it.",
          { 
            TextType: "subheader",
            Content: "Lastly, to Jon:",
          },
          "Thank you Jon for being such a supportive partner throughout this process. There were countless days where I was drowning in imposter syndrome, but because of you, I was able to push through.",
          "Even though we didn’t know what we were doing, we kept going anyways. And in the end, we built something we both didn’t think was going to be possible. I will be forever proud of that."
        ]
      }
    ]
  };

export default Popper;