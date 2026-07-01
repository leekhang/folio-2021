const IG = {
    metadata: {
        name: "ig",
        theme: "#DC00C5",
        background: "#0C1014",
        gradient: "#F2F9FF",
        display: "yes"
    },
    header: {
      name: "Instagram Boost",
      catchphrase: "Ads made simple for small businesses",
      descriptions: {
        titles: ["COMPANY", "DATE"],
        contents: ["Meta", "Q4 2024 – Q2 2026"]
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
          "Running effective ads takes a lot of expertise. Boost is Instagram's answer to that — a simplified advertising product designed to give small businesses and creators access to powerful ad tools, without the steep learning curve."
        ]
      },{
        type: "text",
        name: "Role",
        content: [
          "I led product strategy and design for Boost advertisers seeking more out of their ads than just engagement — introducing advanced lower-funnel controls like purchase objectives, budget guidance, and conversion insights as intuitive features built for everyday advertisers. I balanced short-term revenue execution while driving the team's north star vision for where Boost should go, in close collaboration with teams across Instagram, Catalog, and Meta Ads.",
          "To learn more about my work on this team, feel free to reach out to me."
        ]
      },{
	type: "gallery",
	name: "Selected works",
	content: [
		require('./PO.png'),
		require('./CL.png'),
		require('./ATR.png')
	]
      }
    ]
  };

export default IG;
