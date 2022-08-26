import React from 'react';
import classes from "./UsefulCurrentItem.module.scss";

const UsefulCurrentItem = (props) => {
    const {currentUseful} = props;
    return (
        <div className={classes.useful_item_body}>
            <img
                src={currentUseful.img && currentUseful.img}
                alt={currentUseful.name && currentUseful.name}
                className={classes.useful_itemImg}
            />
            <div className={classes.useful_item_about}>
                {currentUseful.descriptions &&
                    currentUseful.descriptions.map(descriptionItem =>
                        <div
                            className={classes.useful_item_about_item}
                            key={descriptionItem.id}
                        >
                            {descriptionItem.name &&
                                <p className={classes.useful_about_itemTitle}>{descriptionItem.name}</p>
                            }
                            {descriptionItem.body &&
                                <p className={classes.useful_about_itemBody}>{descriptionItem.body}</p>
                            }
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default UsefulCurrentItem;