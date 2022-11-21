const ABP = {
    metadata: {
        name: "abp",
        theme: "#1070E0",
        gradient: "#F2F9FF",
        display: "yes"
    },
    header: {
      name: "Web Signals Team",
      catchphrase: "Defining the next era of ad attribution technology.",
      descriptions: {
        titles: ["COMPANY", "ROLE", "TIME"],
        contents: ["Meta, Inc.", "Product Designer", "Aug 2020 – Mar 2022"]
      }
    },
    sections: [
      {
        name: "Context",
        type: "text",
        content: [
          "With the deterioration of 3rd party cookies and advancements in the data protection policies, the Signals team was focused on onboarding advertisers to Conversions API — a new ad attribution technology that adheres to modern regulations and policies for advertising."
        ]
      },{
        type: "text",
        name: "Role", 
        content: [
          "As a Product Designer on the team, I've led several projects and strategies to help small-sized advertisers onboard to Conversions API through 3rd Party integrations."
        ]
      },{ 
        type: "gallery",
        name: "Selected Works",
        content: [
          require('./Partner Gallery.png'),
          require('./Overview Tab.png'),
          require('./GTM.png')
        ],
        footer: "Shoot me an email for project details."
      }
    ]
  };

export default ABP;