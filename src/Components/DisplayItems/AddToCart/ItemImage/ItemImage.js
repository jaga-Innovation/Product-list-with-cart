import React, {useMemo, memo} from 'react';
import useMediaQuery from '~/Hooks/useMediaQuery';
import * as styles from './styles.module.css';

function ItemImage({images, selected}){
    const [tablet] = useMediaQuery('(max-width: 900px)');
    const [mobile] = useMediaQuery('(max-width: 600px)');

    const image = useMemo(() => {
        if(mobile)
            return images.mobile;
        else if(tablet)
            return images.tablet;
        else
            return images.desktop;
    }, [tablet, mobile])

    return (<img className={styles.item_image} src={image} style={selected ? {border: '2px solid #C73B0F'} : {}}/>)
}

export default memo(ItemImage);