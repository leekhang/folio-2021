const Popper = {
    metadata: {
        name: "popper",
        theme: "#780039",
        gradient: "#FFF9FC",
        display: "yes"
    },
    header: {
      name: "Popper App",
      catchphrase: "Bringing the art of coffee roasting back to your kitchen.",
      descriptions: {
        titles: ["ROLE", "TIME", "DATE"],
        contents: ["Product Design", "3 Months", "Fall 2019"]
      },
      images: [
        require('./Popper.png')
      ]
    },
    sections: [
      { 
        name: "Context",
        type: "text",
        content: [
          "Coffee roasting used to be a household activity but slowly phased out due to the automation of coffee roasting during the industrial revolution. However, home-roasted coffee, much like cooking, can create a huge range of different flavors depending on your preferences.",
          "For a couple of months, I was hired to do some early explorations on creating a coffee roasting experience for coffee lovers, from picking the beans, to roasting, to recording the results."
        ]
      },{ 
        name: "Gallery",
        type: "gallery",
        content: [
          require('./Popper Main 1.png'),
          require('./Popper Main 2.png'),
          require('./Caffeine Design System.png')
        ],
        footer: "Shoot me an email for project details."
      }
    ]
  };

export default Popper;