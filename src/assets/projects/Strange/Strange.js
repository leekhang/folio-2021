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
        require('./Strange Splash.png')
      ]
    },
    sections: [
      { 
        name: "Context",
        type: "text",
        content: [
          "Even with its immense potential, precision fabrication machines can be intimidating to create, especially for non-technical people.", 
          [
            {
              TextType: "innerText",
              Content: "Under the "
            },{
              TextType: "link",
              Content: "Machine Agency Lab",
              href: "https://depts.washington.edu/machines/"
            },{
              TextType: "innerText",
              Content: ", I collabed with PhD Student "
            },{
              TextType: "link",
              Content: "Jasper Tran O'Leary",
              href: "https://jasperoleary.com/"
            },{
              TextType: "innerText",
              Content: " to design a 3D modelling platform for creating precision machines."
            }
          ],
          "The goal of the experience is to provide an intuitive platform that can help beginners create intricate, precision machines with fundamental building blocks.",
          [
            {
              TextType: "innerText",
              Content: "A variation of this work was later published in 2021"
            },{
              TextType: "innerText",
              Content: ". You can check it out "
            },{
              TextType: "link",
              Content: "here",
              href: "https://dl.acm.org/doi/10.1145/3472749.3474779"
            },{
              TextType: "innerText",
              Content: "."
            }
        
          ]
        ]
      },{ 
        name: "Gallery",
        type: "gallery",
        title: "Gallery",
        content: [
          require('./Sandbox.mp4'),
          require('./Hardware Simulation.mp4'),
          require('./Graphical Import.mp4')
        ]
      } 
    ]
  };

export default Strange;