const Strange = {
    metadata: {
      name: "strange",
      theme: "#3E29BF",
      gradient: "#FAF9FF",
      display: "yes"
    },
    header: {
      name: "Strange Machines",
      catchphrase: "Empowering newbies to design & build their own machines",
      descriptions: {
        titles: ["ROLE", "TIME", "DATE"],
        contents: ["Product Design", "3 Months", "Summer 2020"]
      },
      images: [
        require('../../images/Strange1.png')
        // require('../images/Strange2.png')
      ]
    },
    sections: [
      { 
        name: "Context",
        type: "text",
        content: [
          "Coffee roasting used to be a household activity. Unfortunately, with the automation of coffee roasting, companies began selling roasted coffee beans during the industrial revolution, and this practice slowly died out.",
          "For a couple of months, I was hired to do some early explorations on creating a coffee roasting experience for coffee lovers, from picking the beans, to roasting, to recording the results."
        ]
      },{ 
        name: "Gallery",
        type: "gallery",
        title: "Gallery",
        content: [
          require('../../images/Strange0.png'),
          require('../../images/Strange1.png'),
          require('../../images/Strange3.png')
        ]
      } 
    ]
  };

export default Strange;