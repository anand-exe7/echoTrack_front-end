import { motion } from "framer-motion";

export default function WhyEchoTrack() {
  const reasons = [
    {
      tag: "NO NOISE",
      title: "Not built for attention",
      desc: "There are no likes, followers, or feeds here. EchoTrack exists only for you — not an audience.",
    },
    {
      tag: "NO PRESSURE",
      title: "Consistency without punishment",
      desc: "Missed days don’t erase progress. Growth isn’t fragile, and it doesn’t reset.",
    },
    {
      tag: "NO COMPARISON",
      title: "Your pace is valid",
      desc: "You’re not behind. You’re just moving differently. EchoTrack reflects effort, not outcomes.",
    },
  ];

  return (
    <section id="why" className="py-32 px-[8%]">
      {/* Header */}
      <div className="max-w-[720px] mb-16">

        {/* Softer Gradient Heading */}
        <h2
          className="
            text-[clamp(2.4rem,4vw,3rem)]
            font-bold
            leading-[1.2]
            mb-4
            bg-gradient-to-br
            from-[#4F772D]
            via-[#90A955]
            to-[#31572C]
            bg-clip-text
            text-transparent
          "
        >
          Why EchoTrack exists
        </h2>

        {/* Softer Accent Line */}
        <div
          className="
            w-[44px] h-[3px]
            rounded-full
            bg-gradient-to-br
            from-[#4F772D]
            to-[#90A955]
            opacity-80
            mb-6
          "
        />

        <p className="text-[1.05rem] text-slate-600 leading-7">
          Most tools push you to perform.
          <br />
          EchoTrack is built to help you notice.
        </p>
      </div>

      {/* Cards */}
      <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {reasons.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -2, scale: 1.04 }}
            transition={{ duration: 0.2 }}
            viewport={{ once: true }}
            className="
              p-10
              rounded-2xl
              border border-[#ECF39E]/70
              bg-white/85
              backdrop-blur-lg
              shadow-[0_18px_40px_-15px_rgba(79,119,45,0.15)]
              transition-all duration-200
            "
          >
            {/* Tag (Softer gradient) */}
            <span
              className="
                inline-block
                text-[0.7rem]
                tracking-[0.15em]
                font-semibold
                px-4 py-1.5
                rounded-full
                mb-5
                bg-gradient-to-b
                from-[#4F772D]
                to-[#31572C]
                text-white
                opacity-90
              "
            >
              {item.tag}
            </span>

            {/* Card Title (Subtle gradient) */}
            <h3
              className="
                text-[1.3rem]
                font-semibold
                mb-4
                bg-gradient-to-r
                from-[#4F772D]
                to-[#31572C]
                bg-clip-text
                text-transparent
              "
            >
              {item.title}
            </h3>

            <p className="text-[0.98rem] text-slate-600 leading-7">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Quote */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mt-24 text-center text-[1.1rem] text-slate-600"
      >
        <p className="italic opacity-90">
          “Progress doesn’t need applause.
          <br />
          It needs space.”
        </p>
      </motion.div>
    </section>
  );
}
