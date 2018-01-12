import React from 'react';

import allApps from './allApps.jsx';
import Intro from "./Intro.jsx";
import Category from "./Category.jsx";
import CategoryList from './CategoryList.jsx';
import FeaturedApps from './FeaturedApps.jsx';


let categories = {
  "timetable": {
    name: "Timetable",
    description: "Apps for timetable",
    color: "#80D8FF",
    apps: []
  },
  "search": {
    name: "Search",
    description: "Apps for search",
    color: "#CDDC39",
    apps: []
  },
  "productivity": {
    name: "Productivity",
    description: "Apps for productivity",
    color: "#FF9800",
    apps: []
  },
};

let allAppsValues = Object.values(allApps);

for (let i=0; i<allAppsValues.length; i++) {
  if (categories[allAppsValues[i].category]) {
    categories[allAppsValues[i].category].apps.push(allAppsValues[i])
  }
  else {
    console.log(allApps[i].category, categories[allApps[i].category]);
  }
}

categories = Object.values(categories);

export default class MarketplaceComponent extends React.Component {

    render () {
      return (
        <div>
          <Intro allApps={Object.values(allApps)} />

          <div className="container">
            <CategoryList categories={categories} />
            <div className="categories">
              {
                categories.map((category, i) => {
                  return <Category key={i} {...category} />;
                })
              }
            </div>
          </div>

        </div>
      )
    }

}