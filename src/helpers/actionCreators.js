import { defaultSessionState } from '../store/store';
import * as mutations from '../store/mutations';

export function setWords(words) {
    return {
        type: mutations.SET_WORDS,
        words,
    };
}

export function setCorrAnswToZero() {
    return {
        type: mutations.SET_CORR_ANSW_TO_ZERO,
    };
}

// SET_STATE

export function setDefaultState() {
    return {
        type: mutations.SET_SESSION_STATE,
        state: defaultSessionState,
    };
}

export function setLoadingState() {
    return {
        type: mutations.SET_SESSION_STATE,
        state: Object.assign({}, defaultSessionState, {
            loading: true,
        }),
    };
}

export function setStartedState() {
    return {
        type: mutations.SET_SESSION_STATE,
        state: Object.assign({}, defaultSessionState, {
            started: true,
        }),
    };
}

export function setStartedWithErrorState() {
    return {
        type: mutations.SET_SESSION_STATE,
        state: Object.assign({}, defaultSessionState, {
            startedWithError: true,
        }),
    };
}

export function setWillBeFinishedState() {
    return {
        type: mutations.SET_SESSION_STATE,
        state: Object.assign({}, defaultSessionState, {
            started: true,
            willBeFinished: true,
        }),
    };
}

export function setFinishedState() {
    return {
        type: mutations.SET_SESSION_STATE,
        state: Object.assign({}, defaultSessionState, {
            started: true,
            finished: true,
        }),
    };
}
