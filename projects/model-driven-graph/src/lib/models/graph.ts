import { Edge } from './edge';
import { Vertex } from './vertex';

export class Graph {
  get vertexes(): readonly Vertex[] {
    return this._vertexes;
  }

  set vertexes(value: readonly Vertex[]) {
    this._vertexes = [...value];
  }

  get edges(): readonly Edge[] {
    return this._edges;
  }

  set edges(value: readonly Edge[]) {
    this._edges = [...value];
  }

  private _vertexes: Vertex[] = [];
  private _edges: Edge[] = [];
}
