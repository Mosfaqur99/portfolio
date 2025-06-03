import { motion } from "framer-motion";
// import post1 from "../assets/post1.jpg";

const posts = [
  {
    image: "/assets/post1.jpg",
    title: "A life without the daily traffic jams",
    date: "Oct 04, 2111",
    author: "Themebucket",
    excerpt:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  },
  {
    image: "/assets/post1.jpg",
    title: "Proportion are what's really needed",
    date: "Oct 04, 2111",
    author: "Themebucket",
    excerpt:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  },
  {
    image: "/assets/post1.jpg",
    title: "Mounts of paper work to remember the way",
    date: "Oct 04, 2111",
    author: "Themebucket",
    excerpt:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  },
];

const PostCard = ({ image, title, date, author, excerpt }) => (
  <motion.div
    whileHover={{ y: -5 }}
    transition={{ type: "spring", stiffness: 200 }}
    className="bg-zinc-900 text-white rounded-lg overflow-hidden shadow-md max-w-sm"
  >
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-5">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-400 mb-2">
        Post on {date} by{" "}
        <span className="text-emerald-400 font-medium">{author}</span>
      </p>
      <p className="text-gray-300 text-sm mb-4">{excerpt}</p>
      <a
        href="#"
        className="text-emerald-400 text-sm font-medium hover:underline"
      >
        Read More
      </a>
    </div>
  </motion.div>
);

const FeaturedPosts = () => (
  <section
    id="blog"
    className="relative bg-cover bg-center py-20 px-4 text-center"
  >
    {/* Background image */}
    <div className="absolute inset-0">
      <img
        src="/assets/Section.png"
        alt="Background"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black opacity-90" />
    </div>

    {/* Content */}
    <motion.h2
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="relative z-10 text-2xl font-semibold text-white mb-12"
    >
      Featured Posts
    </motion.h2>

    <div className="relative z-10 flex flex-col md:flex-row justify-center items-stretch gap-8 max-w-6xl mx-auto">
      {posts.map((post, index) => (
        <PostCard key={index} {...post} />
      ))}
    </div>
  </section>
);

export default FeaturedPosts;
