import React from 'react'
import { useState, useEffect } from 'react';

function Delete() {

    const [commentList, setCommentList] = useState([]);

    useEffect(() => {
        getCommentList();
    }, []);

    const getCommentList = async () => {
        const url = 'https://thin-fireant-85.loca.lt/comments';
        const response = await fetch(url);
        const comments = await response.json();

        setCommentList(comments);
    }

    const deleteHandler = async (pCommentId) => {
        await fetch(`https://thin-fireant-85.loca.lt/comments/${pCommentId}`, {
            method: 'DELETE',
        });

        await getCommentList();
    }

    return (
        <div>
            {
                commentList.map((comment) =>
                    <p>
                        <span onClick={() => deleteHandler(comment.id)}>x</span>
                        {comment.body}
                    </p>
                )
            }
        </div>
    )
}

export default Delete;