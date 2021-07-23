import classNames from "classnames";

export default function Button({children, className, outline, onClick}) {
  return (
    <button
      onClick={onClick}
      className={classNames('button', className, {'button-outline' : outline})}>

      {children}

    </button>
  );
}
