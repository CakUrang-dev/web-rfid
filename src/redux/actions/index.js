import { CLICK_OPEN_MENU, GET_ITEM_DATA } from "./ActionTypes";
import { database } from "../../firebase/index";
import { ref, onValue } from "firebase/database";

export const clickMenuOpen = value => ({
    type: CLICK_OPEN_MENU,
    newValue: value
});

export const getItemData = (data) => (dispatch) => {
    const borrowItemRef = ref(database, '/RFID/borrow_item');
    return new Promise((resolve, reject) => {
        onValue(borrowItemRef, (snapshot) => {
            const data = [];
            Object.keys(snapshot.val()).map(key => {
                data.push({
                    id: key,
                    data: snapshot.val()[key]
                });
            });

            dispatch({ type: GET_ITEM_DATA, value: data });
            resolve(snapshot.val());
        });
    })

}
