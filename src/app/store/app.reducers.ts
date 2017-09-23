import { ActionReducerMap } from '@ngrx/store';

import * as fromShoppingList from '../shopping-list/store/shopping-list.reducers';
import * as fromAuth from '../auth/store/auth.reducers';

export interface AppState { // allows me to use below
    shoppingList: fromShoppingList.State;
    auth: fromAuth.State;
}

export const reducers: ActionReducerMap<AppState> = {
    shoppingList: fromShoppingList.shoppingListReducer,
    auth: fromAuth.authReducer
};
