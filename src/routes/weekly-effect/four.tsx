import classes from "./four.module.css";
console.log(classes);

export default function Four() {
  return (
    <div className={classes["container"]}>
      <div className={classes["content"]}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
          quidem consequatur atque dolorem nulla enim. Qui, natus nostrum
          exercitationem voluptatum sunt quis possimus quod ad. Maiores eveniet
          sapiente autem hic.
        </p>
      </div>
      <div className={classes["content"]}></div>
      <div className={classes["content"]}></div>
      <div className={classes["feature"]}>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum,
          iusto!
        </p>
      </div>

      <div className={classes["content"]}></div>
      <div className={classes["content"]}></div>
      <div className={classes["popout"]}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
          quidem consequatur atque dolorem nulla enim. Qui, natus nostrum
          exercitationem voluptatum sunt quis possimus quod ad. Maiores eveniet
          sapiente autem hic.
        </p>
      </div>
    </div>
  );
}

export { Four as Component };
