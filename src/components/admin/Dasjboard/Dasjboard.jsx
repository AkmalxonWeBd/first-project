// Dasjboard.jsx

import React, { useState } from "react";
import HorizontalBar from "./HorizontalBar";
import Pie from "./Pie";
import Stats from "./Stats";

const mockdata =[
  {
    "id": "make",
    "label": "make",
    "value": 424,
    "color": "hsl(18, 70%, 50%)"
  },
  {
    "id": "c",
    "label": "c",
    "value": 593,
    "color": "hsl(103, 70%, 50%)"
  },
  {
    "id": "javascript",
    "label": "javascript",
    "value": 499,
    "color": "hsl(195, 70%, 50%)"
  },
  {
    "id": "lisp",
    "label": "lisp",
    "value": 371,
    "color": "hsl(3, 70%, 50%)"
  },
  {
    "id": "erlang",
    "label": "erlang",
    "value": 160,
    "color": "hsl(63, 70%, 50%)"
  }
]
const Dasjboard = () => {
  // const [data, setData] = useState(mockdata);
  const [sectorsData, setSectorsData] = useState(null);

  return (
<div>
<     Stats
        all={mockdata?.all_tasks}
        finished={mockdata?.finished}
        doing={mockdata?.doing}
        missed={mockdata?.missed}
        cancelled={mockdata?.canceled}
      />
      <div className="grid md:grid-cols-2">
        <div data-aos="fade-right" data-aos-delay="500" className="h-96">
          <Pie mockdata={mockdata} />
        </div>
        <div data-aos="fade-right" data-aos-delay="700" className="h-96">
          <HorizontalBar data={sectorsData} />
        </div>
      </div>
    </div>
  );
};

export default Dasjboard;