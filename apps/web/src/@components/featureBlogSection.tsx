import { ArrowUpRight } from "lucide-react";
import { Eyebrow, fadeUp, Section } from "../@core";
import { motion } from 'motion/react'

type Post = {
  title: string;
  desc: string;
  date: string;
  tag: string;
  image: string;
};

const posts: Post[] = [
  {
    title: "The quiet art of interface design",
    desc: "Why restraint beats decoration in modern product design.",
    date: "Jul 04, 2026",
    tag: "Design",
    image: "./blogs/blogImg1.jpeg",
  },
  {
    title: "Shipping less, faster",
    desc: "A workflow for building small and often.",
    date: "Jun 22, 2026",
    tag: "Process",
    image: "./blogs/blogImg2.jpeg",
  },
  {
    title: "On writing readable code",
    desc: "Code is a letter to whoever reads it next.",
    date: "Jun 08, 2026",
    tag: "Code",
    image: "./blogs/blogImg3.jpeg",
  },
];

// panel slides up + fades in
const panelVariants = {
  rest: { y: "20%", opacity: 0 },
  hover: {
    y: "0%",
    opacity: 1,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const },
  },
};

// dark scrim over the image, only on hover
const scrimVariants = {
  rest: { opacity: 0 },
  hover: { opacity: 1, transition: { duration: 0.4 } },
};

// image gets a subtle zoom on hover
const imgVariants = {
  rest: { scale: 1 },
  hover: { scale: 1.04, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

function BlogCard({ post, className = "" }: { post: Post; className?: string }) {
  return (
    <motion.a
      href="#"
      initial="rest"
      whileHover="hover"
      animate="rest"
      className={`group relative rounded-xl overflow-hidden bg-muted block ${className}`}
    >
      <motion.img
        variants={imgVariants}
        src={post.image}
        alt={post.title}
        className="absolute inset-0 w-full h-full object-cover"
      />

      <motion.div variants={scrimVariants} className="absolute inset-0 bg-black/65" />

      {/* always-visible tag, top-left */}
      <div className="absolute top-5 left-5 text-[11px] uppercase tracking-widest text-background/60">
        {post.tag}
      </div>

      {/* hover-reveal panel */}
      <motion.div
        variants={panelVariants}
        className="absolute inset-x-0 bottom-0 px-6 py-6 border-t border-background/20"
      >
        <h3 className="font-serif italic text-2xl md:text-3xl text-background">
          {post.title}
        </h3>
        <p className="mt-3 text-sm text-background/70 leading-relaxed max-w-md">
          {post.desc}
        </p>
        <div className="mt-5 flex items-center gap-6 text-[11px] uppercase tracking-widest text-background/80">
          <span className="border-b border-background/40 pb-0.5">{post.date}</span>
          <span className="inline-flex items-center gap-1 border-b border-background/40 pb-0.5">
            Read post <ArrowUpRight className="w-3.5 h-3.5" />
          </span>
        </div>
      </motion.div>
    </motion.a>
  );
}

export function Blogs() {
  const [big, ...rest] = posts;

  return (
    <>
      <div className="h-screen w-full m-0 bg-accent relative flex justify-center items-center">
        <p className="font-anton text-background text-8xl text-center">
          WORDS WORTH READING
        </p>
        <div className="border w-9/10 absolute bottom-10 left-1/2 -translate-x-1/2"></div>
      </div>

      <Section id="blogs" className="py-28 md:py-40">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <motion.div {...fadeUp}><Eyebrow>Journal</Eyebrow></motion.div>
            <motion.h2 {...fadeUp} className="mt-6 text-4xl md:text-6xl font-semibold tracking-tight">
              Recent writing.
            </motion.h2>
          </div>
          <motion.a {...fadeUp} href="#" className="text-sm font-medium inline-flex items-center gap-1.5 hover:text-accent">
            View all blogs <ArrowUpRight className="w-4 h-4" />
          </motion.a>
        </div>

        <div className="mt-14 flex flex-col gap-8">
          <motion.div {...fadeUp}>
            <BlogCard post={big} className="h-[560px] md:h-[720px] w-full" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {rest.map((post, i) => (
              <motion.div
                key={post.title}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: 0.05 * (i + 1) }}
              >
                <BlogCard post={post} className="h-[460px] w-full" />
              </motion.div>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}