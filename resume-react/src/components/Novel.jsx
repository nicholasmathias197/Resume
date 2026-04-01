function Novel() {
  return (
    <section id="novel" className="section">
      <h2 className="section-title">Current Creative Work</h2>

      <div className="entry">
        <div className="entry-header">
          <div className="entry-title">MEMBRUM — A Cosmic Horror Novel</div>
          <div className="entry-date">Coming Soon</div>
        </div>

        <div className="novel-grid">
          <div className="novel-cover">
            <a href="/Membrum.pdf" target="_blank" rel="noopener noreferrer">
              <object
                data="/Membrum.pdf#page=1&view=FitH"
                type="application/pdf"
                className="cover-pdf"
              >
                <span className="cover-fallback">📄 View PDF</span>
              </object>
            </a>
          </div>

          <div className="novel-details">
            <p className="entry-description">
              James Cole has spent his life pretending. A software contractor who moves from
              city to city, contract to contract, he performs the role of a man who is fine,
              who is normal, who is not waiting for something to fill the emptiness inside him.
            </p>

            <p className="entry-description">
              Then the proposal appears on his laptop. Words he wrote but does not remember
              writing. Words that describe the unmasking of everything he has ever known.
            </p>

            <p className="entry-description">
              Now he is being watched. A woman with a rolling suitcase who has been in
              seventeen lobbies. A couple who wear the same clothes in every city. A
              construction worker in the room next door. They are not following him.
              They are waiting for him.
            </p>

            <p className="entry-description">
              They call themselves the Believers. They worship the original gods of the
              Americas—beings that were the basis of every cryptid, every Mesoamerican
              deity, every mask humanity has ever worn. And they believe James is the
              door for the nothing that has been waiting since before the world was built.
            </p>

            <div className="novel-meta">
              <span className="meta-item">📖 Cosmic Horror / Psychological Horror</span>
              <span className="meta-item">📄 60,000 words | 172 pages</span>
              <span className="meta-item">⚙️ Code as incantation </span>
            </div>

            <div className="novel-links">
              <a href="/excerpt" className="novel-button">
                Read Excerpt
              </a>
              <button className="novel-button primary" disabled>
                Coming Soon
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Novel;
