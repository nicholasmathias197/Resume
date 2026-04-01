import { Link } from 'react-router-dom';

function Excerpt() {
  return (
    <div className="excerpt-page">
      <div className="excerpt-container">
        <Link to="/" className="excerpt-back">← Back to Resume</Link>

        <header className="excerpt-header">
          <h1 className="excerpt-title">MEMBRUM</h1>
          <p className="excerpt-subtitle">A Cosmic Horror Novel</p>
        </header>

        <article className="excerpt-content">
          <h2 className="chapter-title">Chapter One: The Motel Room</h2>

          <p>
            The air conditioner hummed. It was always the air conditioner. The same hum in every
            motel room, every city, every state. A frequency that vibrated just behind his eyes,
            just below the threshold of pain, just constant enough to keep him from sleeping and
            just forgettable enough that he never remembered to turn it off.
          </p>

          <p>
            James Cole lay on the bed, staring at the acoustic tile ceiling, watching the water
            stain in the corner spread toward the smoke detector he had covered with a sock three
            nights ago. The sock was still there. The blinking light was still hidden. Time was
            still passing. He was still here, in this room, in this body, performing a life he
            had never chosen and could not remember wanting.
          </p>

          <p>
            The room was the same as every room. The carpet was the color of dirt, stained in
            places he did not look at, worn thin in the path from the door to the bed to the
            bathroom. It smelled of bleach and old cigarette smoke and the particular staleness
            of a place that had been cleaned too many times by people who had stopped caring. The
            bedspread was rough, beige, pilled from a thousand washes, pulled tight across a
            mattress that sagged in the middle. The curtains were heavy, industrial, the color of
            mustard, held closed by a plastic clip that had broken years ago and never been replaced.
            They let in a thin line of light at the bottom, the flicker of the neon sign in the
            parking lot. VACANCY. VACANCY. VACANCY. The word pulsed against the ceiling in shades
            of red and not-red, a heartbeat that did not belong to anyone.
          </p>

          <p>
            He had been in this room for six days. He would be in this room for six more months
            if the contract held. The contract would hold. Contracts always held. He did good work.
            Clean. Efficient. The kind of work that did not invite questions. The kind of work that
            let him move through the world without leaving a trace.
          </p>

          <p>
            The clock on the nightstand read 3:17 AM. He had been awake for forty-three hours. He
            was not tired. He was never tired. Tired was for people who had something to recover
            from. He had nothing. He was nothing. The hours passed through him like light through
            glass, leaving no mark, no warmth, no evidence they had ever been.
          </p>

          <p>
            He turned on his side. The laptop sat on the nightstand, closed, charging, waiting. He
            had finished the proposal for the logistics company two days ago. It was good work.
            Clean. Efficient. They would approve it, and he would spend six months in Columbus
            building a system they didn't need, and then he would move to the next city and do it
            again. The pattern was comfortable. The pattern was the only thing that made sense. The
            pattern was a mask he wore over the empty space where a life should have been.
          </p>

          <p>
            He closed his eyes. The hum of the air conditioner filled his head. And somewhere
            beneath the hum, beneath the dark, beneath the exhaustion that was not exhaustion,
            something stirred. Something that had been waiting for him to stop pretending.
          </p>

          <p>
            He opened his eyes. The room was the same. The ceiling was the same. The water stain
            was the same. The line of light at the bottom of the curtains flickered red. VACANCY.
            VACANCY. The word pulsed against the ceiling, against his eyes, against the space behind
            his eyes where something was stirring.
          </p>

          <p>
            He sat up. He opened the laptop. The screen glowed. A document was open. He did not
            remember opening it. He did not remember writing what was on it.
          </p>

          <p>He read the first line:</p>

          <p className="excerpt-highlight">
            <em>Phase Four: The Unmasking.</em>
          </p>

          <p>
            He did not close the laptop. He did not delete the file. He sat in the dark and read
            the words he had written without writing and felt, for the first time in years, something
            that might have been recognition.
          </p>
        </article>

        <footer className="excerpt-footer">
          <Link to="/" className="novel-button">← Back to Resume</Link>
        </footer>
      </div>
    </div>
  );
}

export default Excerpt;
