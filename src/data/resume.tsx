import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Sahil Pitale",
  initials: "SP",
  url: "https://sahilpitale.vercel.app",
  location: "Raigad, Maharashtra",
  locationLink:
    "https://www.google.com/maps/place/Nate,+Maharashtra+402305/@18.1393165,73.3982956,15z/data=!4m6!3m5!1s0x3be82bbe9afebbdb:0xc8d3daa9dc751175!8m2!3d18.1380268!4d73.3981303!16s%2Fg%2F1tdr1sbn",
  description:
    "Data Science enthusiast. Turning data into decisions through Machine Learning and AI",
  summary:
    "I'm an enthusiastic Information Technology student at Dr. Babasaheb Ambedkar Technological University, Maharashtra. My passion lies in exploring Data Science, Machine Learning, and Artificial Intelligence, where I transform data into meaningful insights. Currently focused on projects in Natural Language Processing, Machine Learning, Neural Networks, and Deep Learning, I bring fresh perspectives to problem-solving in these fields. I'm actively seeking opportunities to collaborate on innovative projects and stay current with the latest developments in Data Science, Machine Learning, and Artificial Intelligence. Let's connect and explore the possibilities in these exciting areas!",
  avatarUrl: "/me2.jpg",
  skills: [
    "Python",
    "Jupyter Notebook",
    "Pandas",
    "NumPy",
    "Matplotlib",
    "Seaborn",
    "SQL",
    "Scikit-learn",
    "Data Visualization",
    "Data Analysis",
    "Statistical Analysis",
    "Git",
    "Machine Learning",
    "TensorFlow",
    "Deep Learning",
    "OpenCV",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "sp9328123456@gmail.com",
    tel: "+919359710712",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/SahilPitale06",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/sahil-pitale-56a5681bb/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/?lang=en",
        icon: Icons.x,

        navbar: true,
      },
      // Youtube: {
      //   name: "Youtube",
      //   url: "https://dub.sh/dillion-youtube",
      //   icon: Icons.youtube,
      //   navbar: true,
      // },
      Resume: {
        name: "Resume",
        url: "https://drive.google.com/file/d/your-resume-link/view",
        icon: Icons.googleDrive,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  // work: [
  //   {
  //     company: "Atomic Finance",
  //     href: "https://atomic.finance",
  //     badges: [],
  //     location: "Remote",
  //     title: "Bitcoin Protocol Engineer",
  //     logoUrl: "/atomic.png",
  //     start: "May 2021",
  //     end: "Oct 2022",
  //     description:
  //       "Implemented the Bitcoin discreet log contract (DLC) protocol specifications as an open source Typescript SDK. Dockerized all microservices and setup production kubernetes cluster. Architected a data lake using AWS S3 and Athena for historical backtesting of bitcoin trading strategies. Built a mobile app using react native and typescript.",
  //   },
  //   {
  //     company: "Shopify",
  //     badges: [],
  //     href: "https://shopify.com",
  //     location: "Remote",
  //     title: "Software Engineer",
  //     logoUrl: "/shopify.svg",
  //     start: "January 2021",
  //     end: "April 2021",
  //     description:
  //       "Implemented a custom Kubernetes controller in Go to automate the deployment of MySQL and ProxySQL custom resources in order to enable 2,000+ internal developers to instantly deploy their app databases to production. Wrote several scripts in Go to automate MySQL database failovers while maintaining master-slave replication topologies and keeping Zookeeper nodes consistent with changes.",
  //   },
  //   {
  //     company: "Nvidia",
  //     href: "https://nvidia.com/",
  //     badges: [],
  //     location: "Santa Clara, CA",
  //     title: "Software Engineer",
  //     logoUrl: "/nvidia.png",
  //     start: "January 2020",
  //     end: "April 2020",
  //     description:
  //       "Architected and wrote the entire MVP of the GeForce Now Cloud Gaming internal admin and A/B testing dashboard using React, Redux, TypeScript, and Python.",
  //   },
  //   {
  //     company: "Splunk",
  //     href: "https://splunk.com",
  //     badges: [],
  //     location: "San Jose, CA",
  //     title: "Software Engineer",
  //     logoUrl: "/splunk.svg",
  //     start: "January 2019",
  //     end: "April 2019",
  //     description:
  //       "Co-developed a prototype iOS app with another intern in Swift for the new Splunk Phantom security orchestration product (later publicly demoed and launched at .conf annual conference in Las Vegas). Implemented a realtime service for the iOS app in Django (Python) and C++; serialized data using protobufs transmitted over gRPC resulting in an approximate 500% increase in data throughput.",
  //   },
  //   {
  //     company: "Lime",
  //     href: "https://li.me/",
  //     badges: [],
  //     location: "San Francisco, CA",
  //     title: "Software Engineer",
  //     logoUrl: "/lime.svg",
  //     start: "January 2018",
  //     end: "April 2018",
  //     description:
  //       "Proposed and implemented an internal ruby API for sending/receiving commands to scooters over LTE networks. Developed a fully automated bike firmware update system to handle asynchronous firmware updates of over 100,000+ scooters worldwide, and provide progress reports in real-time using React, Ruby on Rails, PostgreSQL and AWS EC2 saving hundreds of developer hours.",
  //   },
  //   {
  //     company: "Mitre Media",
  //     href: "https://mitremedia.com/",
  //     badges: [],
  //     location: "Toronto, ON",
  //     title: "Software Engineer",
  //     logoUrl: "/mitremedia.png",
  //     start: "May 2017",
  //     end: "August 2017",
  //     description:
  //       "Designed and implemented a robust password encryption and browser cookie storage system in Ruby on Rails. Leveraged the Yahoo finance API to develop the dividend.com equity screener",
  //   },
  // ],
  education: [
    {
      school: "Dr. Babasaheb Ambedkar Technological University, Lonere",
      href: "https://dbatu.ac.in/",
      degree: "B. tech in Information Technology",
      logoUrl: "/unilogo.jpg",
      start: "2022",
      end: "2025",
    },
    {
      school: "IOPE Lonere",
      href: "https://diploma.dbatu.ac.in/",
      degree: "Diploma in Information Technology",
      logoUrl: "/unilogo.jpg",
      start: "2018",
      end: "2021",
    },
    {
      school: "Shri.Sadguru Anant Maharaj Vidyalaya Nate",
      href: "https://m.facebook.com/profile.php?id=242632269223476",
      degree: "5th Standard to 10th Standard",
      logoUrl: "/rayat.jpg",
      start: "2012",
      end: "2018",
    },
    {
      school: "R.Z.P.School Nate",
      href: "https://zpraigad.in/",
      degree: "1st Standard to 4th Standard",
      logoUrl: "/Marathishala.jpg",
      start: "2008",
      end: "2012",
    },
  ],
  // projects: [
  //   {
  //     title: "Chat Collect",
  //     href: "https://chatcollect.com",
  //     dates: "Jan 2024 - Feb 2024",
  //     active: true,
  //     description:
  //       "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
  //     technologies: [
  //       "Next.js",
  //       "Typescript",
  //       "PostgreSQL",
  //       "Prisma",
  //       "TailwindCSS",
  //       "Stripe",
  //       "Shadcn UI",
  //       "Magic UI",
  //     ],
  //     links: [
  //       {
  //         type: "Website",
  //         href: "https://chatcollect.com",
  //         icon: <Icons.globe className="size-3" />,
  //       },
  //     ],
  //     image: "",
  //     video:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
  //   },
  //   {
  //     title: "Magic UI",
  //     href: "https://magicui.design",
  //     dates: "June 2023 - Present",
  //     active: true,
  //     description:
  //       "Designed, developed and sold animated UI components for developers.",
  //     technologies: [
  //       "Next.js",
  //       "Typescript",
  //       "PostgreSQL",
  //       "Prisma",
  //       "TailwindCSS",
  //       "Stripe",
  //       "Shadcn UI",
  //       "Magic UI",
  //     ],
  //     links: [
  //       {
  //         type: "Website",
  //         href: "https://magicui.design",
  //         icon: <Icons.globe className="size-3" />,
  //       },
  //       {
  //         type: "Source",
  //         href: "https://github.com/magicuidesign/magicui",
  //         icon: <Icons.github className="size-3" />,
  //       },
  //     ],
  //     image: "",
  //     video: "https://cdn.magicui.design/bento-grid.mp4",
  //   },
  //   {
  //     title: "llm.report",
  //     href: "https://llm.report",
  //     dates: "April 2023 - September 2023",
  //     active: true,
  //     description:
  //       "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
  //     technologies: [
  //       "Next.js",
  //       "Typescript",
  //       "PostgreSQL",
  //       "Prisma",
  //       "TailwindCSS",
  //       "Shadcn UI",
  //       "Magic UI",
  //       "Stripe",
  //       "Cloudflare Workers",
  //     ],
  //     links: [
  //       {
  //         type: "Website",
  //         href: "https://llm.report",
  //         icon: <Icons.globe className="size-3" />,
  //       },
  //       {
  //         type: "Source",
  //         href: "https://github.com/dillionverma/llm.report",
  //         icon: <Icons.github className="size-3" />,
  //       },
  //     ],
  //     image: "",
  //     video: "https://cdn.llm.report/openai-demo.mp4",
  //   },
  //   {
  //     title: "Automatic Chat",
  //     href: "https://automatic.chat",
  //     dates: "April 2023 - March 2024",
  //     active: true,
  //     description:
  //       "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
  //     technologies: [
  //       "Next.js",
  //       "Typescript",
  //       "PostgreSQL",
  //       "Prisma",
  //       "TailwindCSS",
  //       "Shadcn UI",
  //       "Magic UI",
  //       "Stripe",
  //       "Cloudflare Workers",
  //     ],
  //     links: [
  //       {
  //         type: "Website",
  //         href: "https://automatic.chat",
  //         icon: <Icons.globe className="size-3" />,
  //       },
  //     ],
  //     image: "",
  //     video:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
  //   },
  // ],
  projects: [
    {
      title: "Text Sentiment Detector",
      href: "https://github.com/SahilPitale06/Toxic-Sentiment-Detector.git", // here i have to give links of working softwares of projects, not of github but since i don't have them yet
      dates: "2024",
      active: true,
      description:
        "Developed a machine learning model using classification algorithms to detect toxic content in text data. Achieved effective performance in identifying multiple categories of toxic comments including hate speech. The model processes textual inputs using Natural Language Processing techniques to provide accurate classifications between toxic and non-toxic sentiments.",
      technologies: [
        "Python",
        "Streamlit",
        "Scikit-learn",
        "NumPy",
        "Pandas",
        "NLP",
        "TF-IDF",
        "Machine Learning",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/SahilPitale06/Toxic-Sentiment-Detector.git",
          icon: <Icons.github className="size-3" />,
        },
      ],
      // image: "",
      // video:" ",
    },

    {
      title: "Fake News Detection",
      href: "https://github.com/SahilPitale06/Fake-News-Detection-.git",
      dates: "2024",
      active: true,
      description:
        "Built a machine learning model using TF-IDF vectorization and Passive Aggressive Classifier to detect fake news from authentic news articles. The model processes news content using Natural Language Processing techniques and achieves high accuracy in classifying news authenticity, helping combat misinformation spread.",
      technologies: [
        "Python",
        "Streamlit",
        "NLP",
        "Pandas",
        "NumPy",
        "Scikit-learn",
        "TF-IDF",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/SahilPitale06/Fake-News-Detection-.git",
          icon: <Icons.github className="size-3" />,
        },
      ],
    },
    {
      title: "Employer ATS System",
      href: "https://github.com/SahilPitale06/Employer-ATS-System.git",
      dates: "2024",
      active: true,
      description:
        "Built a resume screening application using Python and NLP techniques to analyze resumes against job descriptions. The system extracts text from PDF/DOCX resumes, processes the content, and provides match scores to help streamline the recruitment process.",
      technologies: [
        "Python",
        "PyPDF2",
        "Docx2txt",
        "Streamlit",
        "Spacy",
        "NLTK",
        "Pandas",
        "Spacy",
        "Regular Expressions",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/SahilPitale06/Employer-ATS-System.git",
          icon: <Icons.github className="size-3" />,
        },
      ],
    },
    {
      title: "Document Tampering Detection",
      href: "https://github.com/SahilPitale06/Document-Tampering-Detection.git",
      dates: "2024",
      active: true,
      description:
        "Created an image processing system using OpenCV to detect tampering in documents. The model analyzes document images through advanced computer vision techniques to identify alterations and manipulations, helping maintain document authenticity and security.",
      technologies: [
        "Python",
        "OpenCV",
        "NumPy",
        "Pillow",
        "Matplotlib",
        "Image Processing",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/SahilPitale06/Document-Tampering-Detection.git",
          icon: <Icons.github className="size-3" />,
        },
      ],
    },
  ],

  // hackathons: [
  //   {
  //     title: "Hack Western 5",
  //     dates: "November 23rd - 25th, 2018",
  //     location: "London, Ontario",
  //     description:
  //       "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
  //     links: [],
  //   },
  //   {
  //     title: "Hack The North",
  //     dates: "September 14th - 16th, 2018",
  //     location: "Waterloo, Ontario",
  //     description:
  //       "Developed a mobile application which delivers university campus wide events in real time to all students.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
  //     links: [],
  //   },
  //   {
  //     title: "FirstNet Public Safety Hackathon",
  //     dates: "March 23rd - 24th, 2018",
  //     location: "San Francisco, California",
  //     description:
  //       "Developed a mobile application which communcicates a victims medical data from inside an ambulance to doctors at hospital.",
  //     icon: "public",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/firstnet.png",
  //     links: [],
  //   },
  //   {
  //     title: "DeveloperWeek Hackathon",
  //     dates: "February 3rd - 4th, 2018",
  //     location: "San Francisco, California",
  //     description:
  //       "Developed a web application which aggregates social media data regarding cryptocurrencies and predicts future prices.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg",
  //     links: [
  //       {
  //         title: "Github",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/cryptotrends/cryptotrends",
  //       },
  //     ],
  //   },
  //   {
  //     title: "HackDavis",
  //     dates: "January 20th - 21st, 2018",
  //     location: "Davis, California",
  //     description:
  //       "Developed a mobile application which allocates a daily carbon emission allowance to users to move towards a sustainable environment.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-davis.png",
  //     win: "Best Data Hack",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
  //     links: [
  //       {
  //         title: "Devpost",
  //         icon: <Icons.globe className="h-4 w-4" />,
  //         href: "https://devpost.com/software/my6footprint",
  //       },
  //       {
  //         title: "ML",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/Wallet6/my6footprint-machine-learning",
  //       },
  //       {
  //         title: "iOS",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/Wallet6/CarbonWallet",
  //       },
  //       {
  //         title: "Server",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/Wallet6/wallet6-server",
  //       },
  //     ],
  //   },
  //   {
  //     title: "ETH Waterloo",
  //     dates: "October 13th - 15th, 2017",
  //     location: "Waterloo, Ontario",
  //     description:
  //       "Developed a blockchain application for doctors and pharmacists to perform trustless transactions and prevent overdosage in patients.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/eth-waterloo.png",
  //     links: [
  //       {
  //         title: "Organization",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/ethdocnet",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Hack The North",
  //     dates: "September 15th - 17th, 2017",
  //     location: "Waterloo, Ontario",
  //     description:
  //       "Developed a virtual reality application allowing users to see themselves in third person.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
  //     links: [
  //       {
  //         title: "Streamer Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/justinmichaud/htn2017",
  //       },
  //       {
  //         title: "Client Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/dillionverma/RTSPClient",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Hack The 6ix",
  //     dates: "August 26th - 27th, 2017",
  //     location: "Toronto, Ontario",
  //     description:
  //       "Developed an open platform for people shipping items to same place to combine shipping costs and save money.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-6ix.jpg",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
  //     links: [
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/ShareShip/ShareShip",
  //       },
  //       {
  //         title: "Site",
  //         icon: <Icons.globe className="h-4 w-4" />,
  //         href: "https://share-ship.herokuapp.com/",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Stupid Hack Toronto",
  //     dates: "July 23rd, 2017",
  //     location: "Toronto, Ontario",
  //     description:
  //       "Developed a chrome extension which tracks which facebook profiles you have visited and immediately texts your girlfriend if you visited another girls page.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/stupid-hackathon.png",
  //     links: [
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/nsagirlfriend/nsagirlfriend",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Global AI Hackathon - Toronto",
  //     dates: "June 23rd - 25th, 2017",
  //     location: "Toronto, Ontario",
  //     description:
  //       "Developed a python library which can be imported to any python game and change difficulty of the game based on real time emotion of player. Uses OpenCV and webcam for facial recognition, and a custom Machine Learning Model trained on a [Kaggle Emotion Dataset](https://www.kaggle.com/c/challenges-in-representation-learning-facial-expression-recognition-challenge/leaderboard) using [Tensorflow](https://www.tensorflow.org/Tensorflow) and [Keras](https://keras.io/). This project recieved 1st place prize at the Global AI Hackathon - Toronto and was also invited to demo at [NextAI Canada](https://www.nextcanada.com/next-ai).",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/global-ai-hackathon.jpg",
  //     win: "1st Place Winner",
  //     links: [
  //       {
  //         title: "Article",
  //         icon: <Icons.globe className="h-4 w-4" />,
  //         href: "https://syncedreview.com/2017/06/26/global-ai-hackathon-in-toronto/",
  //       },
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/TinySamosas/",
  //       },
  //     ],
  //   },
  //   {
  //     title: "McGill AI for Social Innovation Hackathon",
  //     dates: "June 17th - 18th, 2017",
  //     location: "Montreal, Quebec",
  //     description:
  //       "Developed realtime facial microexpression analyzer using AI",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/ai-for-social-good.jpg",
  //     links: [],
  //   },
  //   {
  //     title: "Open Source Circular Economy Days Hackathon",
  //     dates: "June 10th, 2017",
  //     location: "Toronto, Ontario",
  //     description:
  //       "Developed a custom admin interface for food waste startup <a href='http://genecis.co/'>Genecis</a> to manage their data and provide analytics.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/open-source-circular-economy-days.jpg",
  //     win: "1st Place Winner",
  //     links: [
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/dillionverma/genecis",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Make School's Student App Competition 2017",
  //     dates: "May 19th - 21st, 2017",
  //     location: "International",
  //     description: "Improved PocketDoc and submitted to online competition",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/make-school-hackathon.png",
  //     win: "Top 10 Finalist | Honourable Mention",
  //     links: [
  //       {
  //         title: "Medium Article",
  //         icon: <Icons.globe className="h-4 w-4" />,
  //         href: "https://medium.com/make-school/the-winners-of-make-schools-student-app-competition-2017-a6b0e72f190a",
  //       },
  //       {
  //         title: "Devpost",
  //         icon: <Icons.globe className="h-4 w-4" />,
  //         href: "https://devpost.com/software/pocketdoc-react-native",
  //       },
  //       {
  //         title: "YouTube",
  //         icon: <Icons.youtube className="h-4 w-4" />,
  //         href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
  //       },
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/dillionverma/pocketdoc-react-native",
  //       },
  //     ],
  //   },
  //   {
  //     title: "HackMining",
  //     dates: "May 12th - 14th, 2017",
  //     location: "Toronto, Ontario",
  //     description: "Developed neural network to optimize a mining process",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-mining.png",
  //     links: [],
  //   },
  //   {
  //     title: "Waterloo Equithon",
  //     dates: "May 5th - 7th, 2017",
  //     location: "Waterloo, Ontario",
  //     description:
  //       "Developed Pocketdoc, an app in which you take a picture of a physical wound, and the app returns common solutions or cures to the injuries or diseases.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/waterloo-equithon.png",
  //     links: [
  //       {
  //         title: "Devpost",
  //         icon: <Icons.globe className="h-4 w-4" />,
  //         href: "https://devpost.com/software/pocketdoc-react-native",
  //       },
  //       {
  //         title: "YouTube",
  //         icon: <Icons.youtube className="h-4 w-4" />,
  //         href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
  //       },
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/dillionverma/pocketdoc-react-native",
  //       },
  //     ],
  //   },
  //   {
  //     title: "SpaceApps Waterloo",
  //     dates: "April 28th - 30th, 2017",
  //     location: "Waterloo, Ontario",
  //     description:
  //       "Developed Earthwatch, a web application which allows users in a plane to virtually see important points of interest about the world below them. They can even choose to fly away from their route and then fly back if they choose. Special thanks to CesiumJS for providing open source world and plane models.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/space-apps.png",
  //     links: [
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/dillionverma/earthwatch",
  //       },
  //     ],
  //   },
  //   {
  //     title: "MHacks 9",
  //     dates: "March 24th - 26th, 2017",
  //     location: "Ann Arbor, Michigan",
  //     description:
  //       "Developed Super Graphic Air Traffic, a VR website made to introduce people to the world of air traffic controlling. This project was built completely using THREE.js as well as a node backend server.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/mhacks-9.png",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
  //     links: [
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/dillionverma/threejs-planes",
  //       },
  //     ],
  //   },
  //   {
  //     title: "StartHacks I",
  //     dates: "March 4th - 5th, 2017",
  //     location: "Waterloo, Ontario",
  //     description:
  //       "Developed at StartHacks 2017, Recipic is a mobile app which allows you to take pictures of ingredients around your house, and it will recognize those ingredients using ClarifAI image recognition API and return possible recipes to make. Recipic recieved 1st place at the hackathon for best pitch and hack.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/starthacks.png",
  //     win: "1st Place Winner",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
  //     links: [
  //       {
  //         title: "Source (Mobile)",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/mattBlackDesign/recipic-ionic",
  //       },
  //       {
  //         title: "Source (Server)",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/mattBlackDesign/recipic-rails",
  //       },
  //     ],
  //   },
  //   {
  //     title: "QHacks II",
  //     dates: "February 3rd - 5th, 2017",
  //     location: "Kingston, Ontario",
  //     description:
  //       "Developed a mobile game which enables city-wide manhunt with random lobbies",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/qhacks.png",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
  //     links: [
  //       {
  //         title: "Source (Mobile)",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/dillionverma/human-huntr-react-native",
  //       },
  //       {
  //         title: "Source (API)",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/mattBlackDesign/human-huntr-rails",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Terrible Hacks V",
  //     dates: "November 26th, 2016",
  //     location: "Waterloo, Ontario",
  //     description:
  //       "Developed a mock of Windows 11 with interesting notifications and functionality",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/terrible-hacks-v.png",
  //     links: [
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/justinmichaud/TerribleHacks2016-Windows11",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Portal Hackathon",
  //     dates: "October 29, 2016",
  //     location: "Kingston, Ontario",
  //     description:
  //       "Developed an internal widget for uploading assignments using Waterloo's portal app",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/portal-hackathon.png",
  //     links: [
  //       {
  //         title: "Source",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/UWPortalSDK/crowmark",
  //       },
  //     ],
  //   },
  // ],
} as const;
