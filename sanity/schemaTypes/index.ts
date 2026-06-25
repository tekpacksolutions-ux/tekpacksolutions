import { type SchemaTypeDefinition } from 'sanity'
import IndustrySchema from '@/sanity/schemaTypes/IndustrySchema'
import SolutionSchema from '@/sanity/schemaTypes/SolutionSchema'
import MachineSchema from '@/sanity/schemaTypes/MachineScema'
import CategorySchema from '@/sanity/schemaTypes/CategoryScehma'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [IndustrySchema, SolutionSchema, MachineSchema, CategorySchema],
}
