const Priv = {
    metadata: {
        name: "priv",
        theme: "#1070E0",
        gradient: "#F2F9FF",
        display: "yes"
    },
    header: {
      name: "Consent Experiences Team",
      catchphrase: "Helping teams ship consent experiences across all apps and surfaces.",
      descriptions: {
        titles: ["COMPANY", "ROLE", "DATE"],
        contents: ["Meta", "Product Designer", "Since Mar 2022"]
      },
      images: [
        // require('./Placeholder.png')
      ]
    },
    sections: [
      {
        type: "text",
        name: "Context",
        content: [
          "Privacy is an ever changing landscape, with evolving regulations and interface guidelines, our team focuses on creating consent experiences that help users make informed decisions across our Family of Apps."
        ]
      },{
        type: "text",
        name: "Role", 
        content: [
          "I'm currently leading our end-to-end vision on how we can help teams across the company launch consent experiences that are compliant to regulations and meet our UX standards.",
          "As a 0→1 effort, I've taken on several roles on top of Product Design. More notably, I've taken on UX Research to disambiguate the problem space, and took on Product Management to outline our product strategy on our executions each half.",
          "To learn more about my work on this team, feel free to reach out to me."
        ]
      }
    ]
  };

export default Priv;