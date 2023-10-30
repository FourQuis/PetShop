import { React, useState } from 'react';

function CareIntruction() {
    return (
        <div>
        <button
            type="button"
            class="btn btn-primary"
            data-toggle="collapse"
            data-target="#collapseExample"
            aria-expanded="false"
            aria-controls="collapseExample"
        >
            Collapse
        </button>

        <div class="collapse" id="collapseExample">
            <div class="card card-body">This content will be collapsed until the button is clicked.</div>
        </div>
    </div>
    );
}

export default CareIntruction;
