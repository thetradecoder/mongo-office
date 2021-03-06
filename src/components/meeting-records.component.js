import React, {useState, useEffect} from 'react';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "jquery/dist/jquery";
import "../App.css";
import DateFnsUtils from "@date-io/date-fns";
import {DateTimePicker, MuiPickersUtilsProvider} from "@material-ui/pickers";
import moment from "moment";
const username = localStorage.getItem('user');
const userid = localStorage.getItem('userid');

export default function MeetingRecord(){
    const [meetingId, setMeetingId] = useState("");
    const [companyName, setCompanyName]= useState("");
    const [meetingDate, setMeetingDate] = useState(new Date())
    const [title, setTitle] = useState("");
    const [agenda, setAgenda] = useState([]);
    const [venue, setVenue] = useState("");
    const [notice, setNotice] = useState("");
    const [noticeDate]= useState(new Date());
    const [noticeDistribution] = useState([]);
    const [chairedBy] = useState("");
    const [participants] = useState([]);
    const [minutes] = useState("");
    const [minutesPreparedBy] = useState("");
    const [minutesApprovedBy] = useState("");
    const [minutesDistribution] = useState("");
    const [status] = useState("open");    
    const [meetingList, setMeetingList] = useState("");

    function onChangeMeetingId(e){
        setMeetingId(e.target.value);
    }
    function onChangeCompanyName(e){
        setCompanyName(e.target.value)
    }
    function onChangeTitle(e){
        setTitle(e.target.value);
    }
    function onChangeAgenda(e){
        setAgenda(e.target.value);
    }
    function onChangeVenue(e){
        setVenue(e.target.value)
    }
    function onChangeNotice(e){
        setNotice(e.target.value);
    }
    function onChangeMeetingDate(e){
        if(e>new Date()){
            setMeetingDate(e)
        }else{
            setMeetingDate(new Date())
        }
    }

    useEffect(()=>{
        axios.get(`http://localhost:5000/mongo-office/meeting-records/view-list/${username}/${userid}`)
        .then(data=>{
            setMeetingList(
                data.data.reverse().map(e=>{                    
                    return(
                        <div>
                            <a href={`/mongo-office/meeting-records/view-single/${e._id}`} className="nav-link">{e.title} - {new Date(e.meetingDate).toLocaleDateString()} - {e.companyName}</a>
                        </div>
                    );
                })
            )
        })
        .catch(err=>console.log(err))
    }, [])

    function onSubmitRecordMeeting(e){
        e.preventDefault();
        const meetingData = {
            meetingId,
            companyName,
            meetingDate,
            noticeDate,
            title,
            agenda:agenda.split(","),
            venue,
            notice,
            noticeDistribution,
            chairedBy,
            participants,
            minutes,
            minutesPreparedBy,
            minutesApprovedBy,
            minutesDistribution,
            status,
            username,
            userid
        }
        axios.post(`http://localhost:5000/mongo-office/meeting-records/register/${username}/${userid}`, meetingData)
        .then((data)=>{window.alert(data.data); window.location.assign("/mongo-office/meeting-records");})
        .catch(err=>window.alert(err))
    }

    return(
        <div className="body-part pt-3">
            <div><h2 className="text-center">Meeting Records</h2></div>
            <div>
                <ul className="nav nav-tabs pt-2">
                    <li className="nav-item">
                        <a href="#view" data-toggle="tab" className="active nav-link">View meetings</a>
                    </li>
                    <li className="nav-item">
                        <a href="#register" data-toggle="tab" className="nav-link">Register a meeting</a>
                    </li>
                </ul>
            </div>


            <div className="tab-content">
            
            {/* view meetings  */}

            <div id="view" className="tab-pane active pt-2">
                <h4>Meeting list</h4>
                <div>{meetingList}</div>

            </div>

            {/* register meetings */}

            <div id="register" className="tab-pane pt-2">
                <form onSubmit={onSubmitRecordMeeting}>
                    <div className="d-flex flex-wrap justify-content-between">
                    <div className="form-group flex-grow-1 mr-1">
                        <label>Company/Org Name:</label>
                        <input type="text" className="form-control" placeholder="Company name" onChange={onChangeCompanyName} required/>
                    </div>
                    <div className="form-group mr-1">
                        <label>Meeting Reference:</label>
                        <input type="text" className="form-control" placeholder="Meeting reference" onChange={onChangeMeetingId} required/>
                    </div>
                    <div className="form-group">
                        <label>Meeting date & time:</label>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <DateTimePicker value={meetingDate} onChange={onChangeMeetingDate} className="form-control" required/>
                        </MuiPickersUtilsProvider>
                    </div>
                    </div>
                    <div className="form-group">
                        <label>Title:</label>
                        <input type="text" className="form-control" placeholder="Meeting title" onChange={onChangeTitle} required/>
                    </div> 
                    <div className="form-group">
                        <label>Agenda, separate each agenda with a comma:</label>
                        <textarea cols="10" rows="10" className="form-control"  placeholder="Agenda" onChange={onChangeAgenda} required></textarea>
                    </div>                
                    <div className="form-group">
                        <label>Venue:</label>
                        <input type="text" className="form-control" placeholder="Meeting venue" onChange={onChangeVenue} required/>
                    </div>
                    <div className="form-group">
                        <label>Notice (put here the full notice):</label>
                        <textarea cols="10" rows="10" className="form-control"  placeholder="Notice of the meeting" onChange={onChangeNotice} required></textarea>
                    </div>
                    
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
            </div>

        </div>
    );
}


// Detail view of a meeting 
export function ViewSingleMeeting(){
    const id = window.location.href.split("/").reverse()[0];
    const [viewDetails, setViewDetails] = useState("");
    function onClickShowList(){
        return (window.location.assign('/mongo-office/meeting-records'))
    }
    

     useEffect(()=>{
        function onClickEditMinutes(){
            return(window.location.assign(`/mongo-office/meeting-records/edit-minutes/${id}`));
        }
    axios.get(`http://localhost:5000/mongo-office/meeting-records/view-single/${id}`)
    .then(data=>{
        if(data){
            setViewDetails(()=>{
                const meetingDate= moment(data.data.meetingDate).format('YYYY-MM-DD; HH:mm A');
                return(
                    <div className="pt-3">
                        <div className="d-flex justify-content-start flex-wrap">
                            <p className="mr-5"><span className="text-primary">Ref: </span>{data.data.meetingId}</p>
                            <p><span className="text-primary">Date: </span>{meetingDate}</p>
                        </div>
                        <h5><span className="text-primary">Meeting title: </span> {data.data.title}</h5>
                        {/* <p><span className="text-primary">Agenda:</span><br/><ol>{data.data.agenda.map(e=><li>{e}</li>)}</ol></p> */}
                        <p><span className="text-primary">Notice:</span><br/>{data.data.notice}</p>
                        {/* <p><span className="text-primary">Venue: </span><br/>{data.data.venue}</p> */}
                        <div>
                            <p><span className="text-primary">Minutes: </span> <br/>{data.data.minutes}</p>
                            {/* <p><span className="text-primary">Minutes prepared by:</span> {data.data.minutesPreparedBy}</p> */}
                            {/* <p><span className="text-primary">Minutes approved by:</span> {data.data.minutesApprovedBy}</p> */}
                        </div>
                        <div>
                            {/* <p><span className="text-primary">Participants: </span><ol> {data.data.participants.map(e=><li>{e}</li>)}</ol></p> */}
                        </div>
                        <div className="btn-group">
                            <button className="btn btn-warning" onClick={onClickEditMinutes} >Add/Edit Minutes</button>
                            <button className="btn btn-primary" onClick={onClickShowList}>Show list</button>
                        </div>

                    </div>
                );
            });
        }
    })
    .catch(err=>window.alert(err))
   }, [id]);

   return(
       <div className="body-part">
            {viewDetails}
       </div>
   );
}


export function RecordMinutes(){
    const id = window.location.href.split('/').reverse()[0];
    const [minutes, setMinutes] =useState("");
    const [minutesPreparedBy, setMinutesPreparedBy] = useState("");
    const [minutesApprovedBy, setMinutesApprovedBy] = useState("");
    const [participants, setParticipants]=useState([]);
    const [agenda, setAgenda] = useState([]);
    useEffect(()=>{
        axios.get(`http://localhost:5000/mongo-office/meeting-records/edit-minutes/${id}`)
        .then(data=>{
            setMinutes(data.data.minutes);
            setMinutesPreparedBy(data.data.minutesPreparedBy);
            setMinutesApprovedBy(data.data.minutesApprovedBy);
            setParticipants(data.data.participants.join(","));
            setAgenda(data.data.agenda.join(','));
        })
        .catch(err=>window.alert(err));
    }, [id]);

    function onChangeMinutes(e){
        setMinutes(e.target.value);
    }
    function onChangeMinutesPreparedBy(e){
        setMinutesPreparedBy(e.target.value);
    }
    function onChangeMinutesApprovedBy(e){
        setMinutesApprovedBy(e.target.value);
    }
    function onChangeParticipants(e){
        setParticipants(e.target.value);
    }
    function onChangeAgenda(e){
        setAgenda(e.target.value);
    }

    function onSubmitEditMinutes(e){
        e.preventDefault();
        const minutesData = {
            minutes,
            minutesPreparedBy,
            minutesApprovedBy,
            participants:participants.split(","),
            agenda:agenda.split(",")
        };

        axios.put(`http://localhost:5000/mongo-office/meeting-records/edit-minutes/${id}`, minutesData)
        .then(data=>{
            window.alert(data.data); 
            window.location.assign(`/mongo-office/meeting-records/view-single/${id}`);
        })
        .catch(err=>window.alert(err));

    }

    function onClickGoBackToMeetingDetails(){
        return (window.location.assign(`/mongo-office/meeting-records/view-single/${id}`));
    }


    return (
        <div className="body-part">
            <div className="pt-4 pb-4">
                <h4>Add/ Edit Minutes Details</h4>
            </div>
            <form onSubmit={onSubmitEditMinutes}>
                <div className="form-group">
                    <label>Minutes: </label>
                    <textarea className="form-control" rows="15" cols="10" value={minutes} onChange={onChangeMinutes} required></textarea>
                </div>
                
                <div className="form-group">
                    <label>Minutes prepared by:</label>
                    <input className="form-control" value={minutesPreparedBy} onChange={onChangeMinutesPreparedBy} required/>
                </div>
                <div className="form-group">
                    <label>Minutes approved by:</label>
                    <input className="form-control" value={minutesApprovedBy} onChange={onChangeMinutesApprovedBy} required/>
                </div>
                <div className="form-group">
                    <label>Participants (comma separated names only): </label>
                    <textarea className="form-control" placeholder="Participants" rows="5" cols="10" value={participants} onChange={onChangeParticipants} required></textarea>
                </div>
                <div className="form-group">
                    <label>Agenda (comma separated agenda only): </label>
                    <textarea className="form-control" placeholder="Meeting agenda" rows="5" cols="10" value={agenda} onChange={onChangeAgenda} required></textarea>
                </div>
                <div className="btn-group">
                    <button type="submit" className="btn btn-warning">Submit</button>
                    <button className="btn btn-primary" onClick={onClickGoBackToMeetingDetails}>Go back</button>
                </div>
                
            </form>
        </div>
    );
}


