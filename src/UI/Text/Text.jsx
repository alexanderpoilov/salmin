import classNames from 'classnames';
import style from './Text.module.css';
import PropTypes from "prop-types";

export const Text = prop => {
	const {
		As = 'span',
		color = 'black',
		size,
		tsize,
		dsize,
		className,
		children,
		href,
		center,
		bgtrans,
		h80vh,
	} = prop;

	const  classes = classNames(
		className,
		style[color],
		{[style.bgtrans]: bgtrans},
		{[style.center]: center},
		{[style.h80vh]: h80vh},
		{[style[`fs${size}`]]: size},
		{[style[`fst${tsize}`]]:tsize},
		{[style[`fsd${dsize}`]]:dsize},
	);

	return <As className={classes} href={href}>{children}</As>;
};

Text.protoTypes = {
	As: PropTypes.string,
	color: PropTypes.string,
	size: PropTypes.number,
	tsize: PropTypes.number,
	dsize: PropTypes.number,
	h80vh: PropTypes.number,
	className: PropTypes.string,
	href: PropTypes.string,
	center: PropTypes.bool,
	bgtrans: PropTypes.bool,
	children: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.object,
		PropTypes.array,
	]),
}