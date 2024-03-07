@extends('app')

@section('content')
    <main class="main">
        <form action="/start" method="post" id="nav-submit">
            @csrf
            <x-auto-complete-input name="start" placeholder="出発地点の建物名を入力..." />

            {{-- TODO: nameのみにしてjs側からid参照をなくす --}}
            <input type="hidden" name="pac-lat" id="pac-lat">
            <input type="hidden" name="pac-lng" id="pac-lng">
        </form>
    </main>
@endsection

@section('script')
    <script
        src="https://maps.googleapis.com/maps/api/js?key={{ env('GOOGLE_MAP_API_KEY') }}&callback=initMap&libraries=places&v=weekly&solution_channel=GMP_CCS_autocomplete_v1"
        defer></script>
    <script src="{{ asset('js/auto-complete.js') }}"></script>
@endsection
