import React from 'react';
import * as tempImages from '../assets/images/index';

console.log(tempImages.seaoats)
function UserPlants() {
    return (
        <div>
            ONCE SIGNED IN, a user can see:
            <ul>
                <li>
                    <img src={tempImages.seaoats} />
                    Their plants that they have scanned. Sorted by their yard, other locations, native to home location, native to region, non native.
                </li>
                <li>
                    Plants they would like to plant, ie saved plants from browse.
                </li>
                <li>
                    Other api data.
                </li>
            </ul>
        </div>
    )
}

export default UserPlants;