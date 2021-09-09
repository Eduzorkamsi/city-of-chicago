import { takeEvery, put, call, StrictEffect } from "redux-saga/effects"
import permitApi from "../../api/service";
import { actionIds } from "../types/actionsType"
import { AxiosResponse } from "axios";
import { gotPermits, getPermits } from "../types/actionsType"
//  watchers
function* permitSaga(): Generator<StrictEffect> {
    yield takeEvery(actionIds.TOGGLE_MODAL, toggleModalWorker);
    yield takeEvery(actionIds.GET_PERMITS, getPermitsWorker);
}

// workers

function* toggleModalWorker() { }
function* getPermitsWorker({ date }: getPermits) {
    // Get recent permits from City of Chicago

    try {
       
        
        let response: AxiosResponse = yield call(permitApi.get, `?issue_date=${date}`);
       
        switch (response.status) {
            case 200:
                let data: gotPermits = {
                    type: "GOT_PERMITS",
                    permits: response.data,
                };
                // Check if permits for today less than ten
                if( data.permits?.length >=10)
              { 
                  
                yield put(data);
           console.log("Condition met");
            }

            else{
                console.log("Condition  not met");
               
                let today = new Date();
                let prevDay = new Date(today.setDate(today.getDate() -1)).toISOString().slice(0, 10);
                let dataCopy=JSON.parse(JSON.stringify(data.permits));
                        let ind:number =0;
                        while(dataCopy.length<10){
                            prevDay = new Date(today.setDate(today.getDate() +ind)).toISOString().slice(0, 10);
                            let  res: AxiosResponse = yield call(permitApi.get, `?issue_date=${prevDay}`);
                            switch (res.status) {
                                case 200:
                            dataCopy=   dataCopy.concat(res.data);
                            ind--;
                            console.log(ind,prevDay);
                        }
                        }
                            let dataNew: gotPermits = {
                                type: "GOT_PERMITS",
                                permits:dataCopy,
                            };
                            console.log("Condition  not met",dataCopy);


                            yield put(dataNew);
                             
               
                  
                   
            
                 
                 
            }
       
        }





    } catch (err) {

        
    }

}

export default permitSaga