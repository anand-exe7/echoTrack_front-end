export default function GrowthPatterns() {
  return (
    <section id="growth" style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.heading}>
          Growth is not a straight line
        </h2>

        <p style={styles.subheading}>
          EchoTrack helps you notice patterns in effort —
          not just outcomes.
        </p>

        <div style={styles.grid}>
          {patterns.map((item, index) => (
            <div key={index} style={styles.card}>
              <div style={styles.marker} />
              <h3 style={styles.title}>{item.title}</h3>
              <p style={styles.text}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const patterns = [
  {
    title: "Momentum Waves",
    desc:
      "Growth comes in waves. Some weeks move quickly, others slow down — both are part of progress.",
  },
  {
    title: "Quiet Progress",
    desc:
      "Not all improvement feels dramatic. Small efforts accumulate quietly over time.",
  },
  {
    title: "Energy Shifts",
    desc:
      "Your focus naturally moves between skills. EchoTrack reflects this instead of resisting it.",
  },
  {
    title: "No Reset Penalty",
    desc:
      "Missed days don’t erase effort. There are no streaks to break, no progress to lose.",
  },
];

const styles = {
  section: {
    padding: "6.5rem 10%",
    background:
      "radial-gradient(circle at top, #EEF0FF 0%, #FFFFFF 70%)",
  },
  container: {
    maxWidth: "1100px",
    margin: "0 auto",
  },
  heading: {
    fontSize: "2.4rem",
    fontWeight: 700,
    color: "#4E54C8",
    marginBottom: "1rem",
  },
  subheading: {
    fontSize: "1.05rem",
    color: "#555",
    marginBottom: "4rem",
    maxWidth: "600px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "2.5rem",
  },
  card: {
    background: "#FFFFFF",
    borderRadius: "22px",
    padding: "2.6rem",
    boxShadow: "0 24px 50px rgba(0,0,0,0.08)",
  },
  marker: {
    width: "14px",
    height: "14px",
    borderRadius: "50%",
    background: "#6C6FF5",
    marginBottom: "1.2rem",
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
