import React from "react";
import {
  PiUsersThreeDuotone,
  PiSneakerMoveDuotone,
  PiLightbulbDuotone,
} from "react-icons/pi";
import { IconCard, Section } from "../UI";
function About() {
  return (
    <Section
      kicker="Be a mentee at Grinder"
      heading="What Grinder Does For It's Students?"
      subheading="We stay in touch with both the students and mentors throughout the mentorship process to ensure that both parties are getting the support they need and to address any issues that may arise."
      direction="row-reverse"
    >
      {/* right column */}
      <div className="tw-grid tw-gap-5 tw-mt-6">
        <IconCard
          Icon={PiLightbulbDuotone}
          body="One-to-One Interaction and Doubt Solving"
        />
        <IconCard
          Icon={PiSneakerMoveDuotone}
          body="Access to Mentorship on Own Schedule and Pace"
        />
        <IconCard
          Icon={PiUsersThreeDuotone}
          body="Connection with Industry Leaders and Insightful Advice"
        />
      </div>
      {/* left column */}
      <div>
        {/* <video
          controls="controls"
          className="video"
          muted
          style={{ width: "100%", maxWidth: "100%", height: "auto" }}
        >
          <source src="/video.mp4" type="video/mp4" />
        </video> */}
          <iframe width={"100%"} controls="controls" height={"400px"} src="https://www.youtube.com/embed/1m6en0SQNFs" title="George Michael - Careless Whisper (Lyric Video)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        
      </div>
    </Section>
  );
}

export default About;
