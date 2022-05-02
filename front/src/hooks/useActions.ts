
import { bindActionCreators } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { selectedTagActions } from 'store/reducers/selectedTag.slice';

const allActions = {
    ...selectedTagActions
}

export const useActions = () => {
    const dispatch = useDispatch()

    return bindActionCreators(allActions, dispatch)
}