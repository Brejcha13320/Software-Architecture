@extends('layout')

@section('content')
    <h1>Crear Tarea</h1>
    <form method="POST" action="{{ route('tasks.store') }}">
        @csrf
        <label for="title">Titulo:</label>
        <input type="text" name="title" id="title" required>
        <label for="description">Descripción:</label>
        <textarea name="description" id="description"></textarea>
        <button type="submit">Guardar Tarea</button>
    </form>
@endsection