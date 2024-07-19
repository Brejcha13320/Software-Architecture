<!DOCTYPE html>
<html>
<head>
    <title>Laravel App</title>
</head>
<body>
    <header>
        <nav>
            <a href="{{ url('/') }}">Principal</a>
            <a href="{{ route('tasks.index') }}">Tareas</a>
        </nav>
    </header>
    <main>
        @yield('content')
    </main>
</body>
</html>
