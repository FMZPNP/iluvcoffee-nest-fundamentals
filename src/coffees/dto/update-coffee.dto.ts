import { PartialType } from "@nestjs/mapped-types";
import { CreateCoffeeDto } from "./create-coffee.dto";

//PartialType is a utility function that takes a class as an argument and returns a new class that behaves exactly
// like the class passed in, except that all the properties are optional now.
export class UpdateCoffeeDto extends PartialType(CreateCoffeeDto) { }
