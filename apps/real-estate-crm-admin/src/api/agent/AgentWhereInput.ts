import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { PropertyListRelationFilter } from "../property/PropertyListRelationFilter";

export type AgentWhereInput = {
  id?: StringFilter;
  phone?: StringNullableFilter;
  name?: StringNullableFilter;
  email?: StringNullableFilter;
  properties?: PropertyListRelationFilter;
};
