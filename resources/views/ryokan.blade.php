@extends('app')

@section('content')
<main class="main">
    {{--フォーム送信を行うためにid追加--}}
    <form action="/ryokan" method="post" id="nav-submit">
        @csrf
        <x-auto-complete-input name="ryokan" id="pac-input" placeholder="旅館名を入力" />
        {{-- エラーメッセージ表示部分 --}}
        <div id="error-display"></div>
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
