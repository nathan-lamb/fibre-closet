import * as React from 'react';
import AddStashForm from "./AddStashForm";

class Wips extends React.Component {
  public render() {
    return (
       <div>
         Wips for daayz
         <div className="column all-100">
           <div className="ink-shade fade">
             <div id="myModal" className="ink-modal fade" data-trigger="#myModalTrigger" data-width="80%"
                  data-height="80%" role="dialog" aria-hidden="true" aria-labelledby="modal-title">
               <div className="modal-header">
                 <h2 id="modal-title">This is the modal header</h2>
               </div>
               <div className="modal-body" id="modalContent">
                 <AddStashForm/>
                 <div className="modal-footer">
                   <div className="push-right">
                     <button className="ink-button caution ink-dismiss">Close</button>
                   </div>
                 </div>
               </div>
             </div>
           </div>
           <a id="myModalTrigger" className="ink-button">Add</a>
         </div>

       </div>
    )
  }
}

export default Wips