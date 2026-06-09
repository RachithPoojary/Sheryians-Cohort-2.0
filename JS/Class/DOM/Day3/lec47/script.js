const users = [
  {
    name: "Alex Carter",
    jobProfile: "Frontend Developer",
    image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Alex crafts responsive and intuitive user interfaces using modern web technologies like React and Tailwind."
  },
  {
    name: "Sarah Jenkins",
    jobProfile: "UX Designer",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Sarah designs user-centric experiences, conducting research and creating wireframes to solve complex usability problems efficiently."
  },
  {
    name: "Michael Chen",
    jobProfile: "Backend Engineer",
    image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Michael builds scalable server-side applications, optimizing database queries and ensuring robust API security protocols consistently."
  },
  {
    name: "Emily Davis",
    jobProfile: "Product Manager",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Emily leads cross-functional teams to deliver innovative software products that align with strategic business goals."
  },
  {
    name: "David Rodriguez",
    jobProfile: "Data Scientist",
    image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "David analyzes complex datasets to uncover hidden trends, building predictive models that drive business growth."
  },
  {
    name: "Jessica Taylor",
    jobProfile: "DevOps Engineer",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Jessica manages cloud infrastructure, streamlining deployment pipelines and maintaining high availability for enterprise software systems."
  },
  {
    name: "Daniel Kim",
    jobProfile: "Marketing Director",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Daniel develops comprehensive digital marketing campaigns, analyzing performance metrics to maximize audience engagement and retention."
  },
  {
    name: "Sophia Martinez",
    jobProfile: "Graphic Designer",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Sophia creates visually stunning brand assets, blending typography and color theory to communicate compelling stories."
  },
  {
    name: "James Wilson",
    jobProfile: "QA Tester",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "James meticulously tests software applications, identifying bugs and ensuring quality standards across all release cycles."
  },
  {
    name: "Olivia Brown",
    jobProfile: "HR Manager",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Olivia fosters a positive workplace culture, managing recruitment processes and supporting employee development programs effectively."
  }
];

let main = document.querySelector('main');

sum = ''
users.forEach((val)=>{
    sum = sum + `<div class="card"> 
            <img src= ${val.image}  alt="image not found">
            <h1>${val.name}</h1>
            <h2>${val.jobProfile}</h2>
            <p>${val.description}</p>
        </div>`
      
    
})

main.innerHTML = sum;