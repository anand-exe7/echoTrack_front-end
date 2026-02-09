export default function FeatureGrid() {
  return (
    <section id="features" style={styles.section}>
      <h2 style={styles.heading}>
        What EchoTrack helps you do
      </h2>

      <div style={styles.grid}>
        {features.map((item, index) => (
          <div key={index} style={styles.card}>
            <span style={styles.index}>
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 style={styles.title}>{item.title}</h3>
            <p style={styles.text}>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

const features = [
  {
    title: "Effort Timeline",
    desc:
      "Your daily actions form a visual timeline, helping you see progress even when results feel slow.",
  },
  {
    title: "Skill Awareness",
    desc:
      "Understand which skills you’re investing in, without forcing balance or rigid goals.",
  },
  {
    title: "Consistency Signals",
    desc:
      "Gentle indicators show momentum building — no streaks, no resets, no guilt.",
  },
  {
    title: "Growth Insights",
    desc:
      "Weekly and monthly reflections help you notice trends instead of chasing numbers.",
  },
  {
    title: "Calm Interface",
    desc:
      "Designed to reduce noise, pressure, and comparison so reflection feels natural.",
  },
];

const styles = {
  section: {
    padding: "6rem 10%",
    background:
      "linear-gradient(180deg, #FFFFFF 0%, #F6F7FF 100%)",
    textAlign: "center",
  },
  heading: {
    fontSize: "2.2rem",
    fontWeight: 700,
    color: "#4E54C8",
    marginBottom: "3.5rem",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "2.2rem",
    maxWidth: "1100px",
    margin: "0 auto",
  },
  card: {
    background: "#FFFFFF",
    borderRadius: "22px",
    padding: "2.6rem",
    textAlign: "left",
    boxShadow: "0 20px 45px rgba(0,0,0,0.08)",
    position: "relative",
  },
  index: {
    position: "absolute",
    top: "1.2rem",
    right: "1.6rem",
    fontSize: "0.85rem",
    color: "#A1A3FF",
    fontWeight: 600,
  },
  title: {
    fontSize: "1.25rem",
    color: "#222",
    marginBottom: "0.8rem",
  },
  text: {
    fontSize: "0.95rem",
    lineHeight: 1.7,
    color: "#555",
  },
};
