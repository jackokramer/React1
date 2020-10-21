import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import SimpleForm from './SimpleForm';
import EssayForm from './EssayForm';
import * as serviceWorker from './serviceWorker';


const jobs =[
{
  title: 'Software Developer',
  description: 'A job as a react developer really tricky but fun',
  rate: `$105,000`
},

{
  title: 'Digital Marketer',
  description: 'A marketing position boosting SEOs',
  rate: `$95,000`
},

{
  title: 'CFO',
  description: 'In charge of Finance and all that good stuff',
  rate: `$115,000`
}]


function JobList() {
    return (
      <section className="jumbotron">
        {jobs.map((job)=>{
          const {title, description, rate} = job;
          return (              
            <JobInfo job={job}></JobInfo>
          )
      })}
        </section>
    )
}

const JobInfo = (props) =>{
  console.log(props)
  const {title, description, rate} = props.job;
  return(
    <article className="Book text-center jumbotron">
  <h3>{title}</h3>
  <p>{description}</p>
  <p>{rate}</p>
  <input type="submit" value="Apply" className="btn btn-primary"/>
    </article>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
    <JobList/>
    <SimpleForm title="form_fill"/>
    <EssayForm more_info="more info to fill out"/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
