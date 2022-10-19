import React, {FC, ReactNode} from 'react';

import styles from './style.module.scss';

type Props = {
	isTitle?: boolean;
	isSubtitle?: boolean;
	className?: string;
	children: ReactNode;
};

const Text: FC<Props> = ({isTitle = false, isSubtitle = false, className = '', children}) => {
	if (isTitle) return <h1 className={`${styles.title} ${className}`}>{children}</h1>;

	if (isSubtitle) return <h2 className={`${styles.subtitle} ${className}`}>{children}</h2>;

	return <p className={`${styles.text} ${className}`}>{children}</p>;
};

export default Text;
