import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { data } from "./data";
import { useState, useEffect } from "react";
import {
  Container,
  CardsList,
  Card,
  Title,
  Value,
  Filters,
  SubHeading,
  Input,
  Select,
  Button
} from "./Styles";

function App() {
  const [projects, setProjects] = useState([{ name: "" }]);

  // const handleChange = (event: any, key: string) => {
  //   console.log(event.target.value);
  //   setFilters({ ...filters, [key]: event.target.value });
  // };
  // const filterLogic = () => {
  //   //if any filter is set do the filter
  //   setTimeout(() => {
  //     if (filters.name || filters.terrain || filters.climate) {
  //       var newArray = data.results.filter((el) => {
  //         let res = false;
  //         if (filters.name) {
  //           res = el.name == filters.name ? true : false;
  //         }
  //         if (filters.terrain) {
  //           res = el.terrain == filters.terrain ? true : false;
  //         }
  //         if (filters.climate) {
  //           res = el.climate == filters.climate ? true : false;
  //         }
  //         return res;
  //       });
  //       setPlanets(newArray);
  //     } else {
  //       // else set the defualt data
  //       setPlanets(data.results);
  //     }
  //   }, 0);
  // };
  // const sorting = (): any => {
  //   console.log(sortValue);
  //   let key = sortValue;
  //   if (key) {
  //     let objs = planets.sort((a: any, b: any) => {
  //       if (a[key] < b[key]) {
  //         return -1;
  //       }
  //       if (a[key] > b[key]) {
  //         return 1;
  //       }
  //       return 0;
  //     });

  //     return objs;
  //   } else {
  //     return data.results;
  //   }
  // };
  // const setData = () => {};
  useEffect(() => {
    // if (climates.length == 1) {
      // const t = data.results
      //   .map((item) => item.terrain)
      //   .filter((value, index, self) => self.indexOf(value) === index);
      // setTerrains(t);
      // const c = data.results
      //   .map((item) => item.climate)
      //   .filter((value, index, self) => self.indexOf(value) === index);
      // setClimates(c);
      setProjects(data.projects);
    // }
    // filterLogic();
    // if (sortValue) {
    //   let obj = sorting();
    //   setPlanets(obj);
    // }
  }, []);
  return (
    <div>
      <h1>Planets</h1>
      <Container>
        <div>
          {/* <Filters>
            <div>
              <SubHeading>Filter </SubHeading>
            </div>
            <div>
              <Input
                type="text"
                placeholder="Name"
                onChange={(e) => handleChange(e, "name")}
              />
            </div>
            <div>
              <Select onChange={(e) => handleChange(e, "terrain")}>
                <option value="">Select Terrain</option>
                {terrains.map((terrain, i) => (
                  <option value={terrain} key={i}>
                    {terrain}
                  </option>
                ))}
              </Select>
            </div>
            <div>
              <Select onChange={(e) => handleChange(e, "climate")}>
                <option value="">Select Climate</option>
                {climates.map((climate, i) => (
                  <option value={climate} key={i}>
                    {climate}
                  </option>
                ))}
              </Select>
            </div>
          </Filters> */}
        </div>

        <div>
          {/* <Filters>
            <div>
              <SubHeading>Sort </SubHeading>
            </div>
            <div>
              <Select onChange={(e) => setSortValue(e.target.value)}>
                <option value="">Select Sort Option</option>
                {sort.map((val, i) => (
                  <option value={val} key={i}>
                    {val}
                  </option>
                ))}
              </Select>
            </div>
          </Filters> */}
        </div>
        {/* <CardsList>
          {planets.map((planet: any, index) => {
            return (
              <Card key={index}>
                <div>
                  <Title>Name:</Title> <Value>{planet.name}</Value>
                </div>
                <div>
                  <Title>Terrian:</Title> <Value>{planet.terrain}</Value>
                </div>
                <div>
                  <Title>Climate:</Title> <Value>{planet.climate}</Value>
                </div>
                <div>
                  <Title>Population:</Title> <Value>{planet.population}</Value>
                </div>
                <div>
                  <Title>Residents:</Title>{" "}
                  <Value>{planet.residents?.length}</Value>
                </div>
              </Card>
            );
          })}
        </CardsList> */}
        Hello
      </Container>
    </div>
  );
}

export default App;
