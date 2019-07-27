import { call, put, all, takeLatest } from 'redux-saga/effects';
import api from '../../../services/api';
import { addToCartSuccess } from './actions';

// function* representa um async - await mais poderoso
// yield = await
function* addToCart({ id }) {
    const response = yield call(api.get, `products/${id}`);

    yield put(addToCartSuccess(response.data));
}

export default all([takeLatest('@cart/ADD_REQUEST', addToCart)]);
