@extends('layout')

@section('content')
    <h1>Tareas</h1>
    <a href="{{ route('tasks.create') }}">Crear Tarea</a>
    <ul>
        @foreach ($tasks as $task)
            <li>{{ $task->title }}</li>
        @endforeach
    </ul>
@endsection