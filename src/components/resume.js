import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';


class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
                alt="avatar"
                style={{height: '200px'}}
                 />
            </div>

            <h2 style={{paddingTop: '2em'}}>Sesha Sai Karthik Nandivada</h2>
            <h4 style={{color: 'grey'}}>Programmer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>Jawaharlal Nehru Technological University, Kakinada is a public university, in Kakinada, East Godavari district, north of the Indian state of Andhra Pradesh. It is one of India's leading universities focusing on engineering.</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Address</h5>
            <p>Vizag</p>
            <h5>Phone</h5>
            <p>(91) 9876543210</p>
            <h5>Email</h5>
            <p>someone@example.com</p>
            <h5>Web</h5>
            <p>mywebsite.com</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>


            <Education
              startYear={2019}
              endYear={2021}
              schoolName="Jawaharlal Nehru Technological University Kakinada"
              schoolDescription="Jawaharlal Nehru Technological University, Kakinada is a public university, in Kakinada, East Godavari district, north of the Indian state of Andhra Pradesh. It is one of India's leading universities focusing on engineering"
               />

               <Education
                 startYear={2015}
                 endYear={2019}
                 schoolName="Avanthi Institute Of Engineering And Technology"
                 schoolDescription="Jawaharlal Nehru Technological University, Kakinada is a public university, in Kakinada, East Godavari district, north of the Indian state of Andhra Pradesh. It is one of India's leading universities focusing on engineering"
                  />
                <hr style={{borderTop: '3px solid #e22947'}} />

              <h2>Experience</h2>

            <Experience
              startYear={2015}
              endYear={2019}
              jobName="First Job"
              jobDescription="Jawaharlal Nehru Technological University, Kakinada is a public university, in Kakinada, East Godavari district, north of the Indian state of Andhra Pradesh. It is one of India's leading universities focusing on engineering"
              />

              <Experience
                startYear={2019}
                endYear={2021}
                jobName="Second Job"
                jobDescription="Jawaharlal Nehru Technological University, Kakinada is a public university, in Kakinada, East Godavari district, north of the Indian state of Andhra Pradesh. It is one of India's leading universities focusing on engineering"
                />
              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Skills</h2>
              <Skills
                skill="javascript"
                progress={100}
                />
                <Skills
                  skill="HTML/CSS"
                  progress={80}
                  />
                  <Skills
                    skill="NodeJS"
                    progress={50}
                    />
                    <Skills
                      skill="React"
                      progress={25}
                      />


          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
