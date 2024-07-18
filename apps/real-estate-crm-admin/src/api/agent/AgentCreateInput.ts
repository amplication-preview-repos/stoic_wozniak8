import { PropertyCreateNestedManyWithoutAgentsInput } from "./PropertyCreateNestedManyWithoutAgentsInput";

export type AgentCreateInput = {
  phone?: string | null;
  name?: string | null;
  email?: string | null;
  properties?: PropertyCreateNestedManyWithoutAgentsInput;
};
