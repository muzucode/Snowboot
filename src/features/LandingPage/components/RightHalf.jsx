import React from "react";



export function RightHalf(props){

  return (
    <div>
    <div className="divider"></div>
    <div className="rightHalf w-100 p-5">
      <h1 className="display-1 mb-5">{props.title}</h1>
      <p className="display-6 rightSubtitle"><i>{props.description}</i></p>

      <h2>From marketing to web development</h2>

      <p className="mb-5">After graduating as business students with majors in marketing and sales, the Snowboot team came to the realization that their
      interests and passions aligned more with the world of software development than it did with that of marketing and sales.  As a group of self-taught coders
      with years of personal and industry experience, the team was committed to providing those looking to switch industries with the chance of doing so in
      the most practical, effective, and cost-efficient manner.  This is how Snowboot came to be.</p>

      <h2>Learning the <i>necessities</i></h2>
      <p className="mb-5">We believe time is of the essence, because after all, everyone values their time.  
        With that in mind, why leave any room for learning things that you won't be utilizing on the job?
        This Snowboot is designed around the idea that you should be learning the utmost important and utmost <i>necessary </i>
        technologies, concepts, and techniques in the world of modern-day web development</p>

      <h2>Giving back</h2>
      <p>We are proud supporters of the veterans and active service members of the United States Armed Forces and the courageous sacrifices they made and continue to make for our amazing country, day in and day out.</p>
      <p><u>50% of all proceeds to Snowboot are made payable to the United States Armed Forces and Veteran's Affairs Office</u>.</p>


    </div>
    </div>

  )

}
