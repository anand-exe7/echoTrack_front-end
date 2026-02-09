export default function Philosophy() {
  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.heading}>
          Growth is not content.
        </h2>

        <p style={styles.subheading}>
          It doesn’t need likes, streaks, or validation.
        </p>

        <div style={styles.divider} />

        <p style={styles.body}>
          EchoTrack is built for people who care about becoming better —
          not being seen.
          <br />
          <br />
          Some days are quiet. Some weeks are uneven.
          <br />
          Progress still happens.
        </p>
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: "6rem 10%",
    background:
      "linear-gradient(180deg, #F8F9FD 0%, #EEF0FF 100%)",
    textAlign: "center",
  },
  container: {
    maxWidth: "820px",
    margin: "0 auto",
  },
  heading: {
    fontSize: "2.6rem",
    fontWeight: 700,
    color: "#4E54C8",
    marginBottom: "0.6rem",
  },
  subheading: {
    fontSize: "1.1rem",
    color: "#666",
    marginBottom: "2rem",
  },
  divider: {
    width: "60px",
    height: "4px",
    background: "#6C6FF5",
    borderRadius: "999px",
    margin: "0 auto 2rem",
  },
  body: {
    fontSize: "1.05rem",
    lineHeight: 1.8,
    color: "#444",
  },
};
